#![allow(warnings)]
use crate::{
    serde::Text,
    server,
    utils::{read_from_file, recv_ack, recv_data},
    ErrorCode, Frame, Request,
};
use bin_layout::{Decoder, Encoder};
use std::{
    fs::{self, File},
    io::{Error, ErrorKind, Read, Result, Write},
    net::{SocketAddr, ToSocketAddrs, UdpSocket},
    thread,
    time::Duration,
};
use ErrorKind::{TimedOut, WouldBlock};
use Frame::*;

macro_rules! check {
    ($cond:expr $(,)?) => {
        if !$cond {
            return Err(Error::new(
                ErrorKind::Other,
                format!("chack failed: {:?}", stringify!($cond)),
            ));
        }
    };
}

#[derive(Debug)]
pub struct Config {
    pub timeout: Duration,
    pub block_size: usize,
    pub max_retransmit: usize,
    pub window_size: usize,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            block_size: 1468,
            max_retransmit: 3,
            timeout: Duration::from_secs(7),
            window_size: 8,
        }
    }
}

pub fn read(socket: UdpSocket, mut file: File, req: Request, config: Config) -> Result<()> {
    socket.set_read_timeout(Some(config.timeout))?;
    socket.send(&Frame::Read(req).encode())?;

    let mut curr_block = 1;
    let mut buf = vec![0; config.block_size];
    loop {
        let (block, bytes) = recv_data(&socket, &mut buf)?;
        if block == curr_block {
            file.write_all(&bytes)?;
            curr_block += 1;
            if bytes.len() < config.block_size {
                return Ok(());
            }
        }
        socket.send(&Frame::Acknowledgment(block).encode())?;
    }
}

pub fn write(socket: UdpSocket, mut file: File, config: Config) -> Result<()> {
    //  socket.send(&Frame::Write(req).encode())?;
    //  check!(recv_ack(&socket)? == 0);

    socket.set_read_timeout(Some(config.timeout))?;
    let mut buf = vec![0; config.block_size];

    for block in 1.. {
        let amt = read_from_file(&mut file, &mut buf)?;
        let data = Data {
            block: block as u16,
            bytes: &buf[..amt],
        }
        .encode();

        socket.send(&data)?;
        let mut attapmt = 1;
        loop {
            match recv_ack(&socket) {
                Ok(num) if num == block as u16 => break,
                Ok(num) => println!("Duplicate Ack: {num}, Current: {block}"),

                Err(err) if matches!(err.kind(), WouldBlock | TimedOut) => {
                    if attapmt < config.max_retransmit {
                        let frame = ErrMsg {
                            code: ErrorCode::AccessViolation,
                            msg: "Max retransmit reached".into(),
                        };
                        socket.send(&frame.encode())?;
                        return Err(ErrorKind::TimedOut.into());
                    }
                    socket.send(&data)?;
                    attapmt += 1;
                }
                Err(err) => return Err(err),
            }
        }
        if amt < config.block_size {
            break;
        }
    }
    Ok(())
}