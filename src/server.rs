use crate::sender::check;
use crate::serde::Text;
use crate::utils::{read_data, recv_ack, recv_frame};
use crate::ErrorCode::{self, *};
use crate::Request;
use crate::{sender::Config, Frame, Frame::*};
use bin_layout::{Decoder, Encoder};
use std::io::{Error, Read, Write};
use std::net::SocketAddr;
use std::{
    io::{ErrorKind, Result},
    net::{ToSocketAddrs, UdpSocket},
};

pub struct Server {
    buf: [u8; 1024],
    socket: UdpSocket,
}

impl Server {
    pub fn listen(addr: impl ToSocketAddrs) -> Self {
        Self {
            buf: [0; 1024],
            socket: UdpSocket::bind(addr).unwrap(),
        }
    }

    pub fn send_err<T>(&self, addr: SocketAddr, code: ErrorCode, msg: T) -> Result<usize>
    where
        T: Into<String>,
    {
        let frame = ErrMsg { code, msg: Text(msg.into()), };
        self.socket.send_to(&frame.encode(), addr)
    }

    pub fn accept(&mut self) -> Result<Context> {
        Ok(loop {
            let (amt, addr) = self.socket.recv_from(&mut self.buf)?;
            recv_frame!(&self.buf[..amt],
                Read(req) => break Context { addr, req, method: Method::Read },
                Write(req) => break Context { addr, req, method: Method::Write },
                _ => self.send_err(addr, AccessViolation, "Only read and write requests are supported.")?
            );
        })
    }
}

pub enum Method {
    Read,
    Write,
}

// ===========================================================================

pub struct Context {
    pub req: Request,
    pub method: Method,
    pub addr: SocketAddr,
}

impl Context {
    pub fn send_data(self, src: &mut impl Read, config: Config) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(Some(config.timeout))?;

        let mut buf = vec![0; config.block_size];

        socket.connect(match self.method {
            Method::Write => {
                socket.send_to(&Frame::Write(self.req).encode(), self.addr)?;
                let (n, addr) = socket.recv_from(&mut buf)?;
                recv_frame!(&buf[..n], Frame::Acknowledgment(n) => check!(n == 0));
                addr
            }
            Method::Read => self.addr,
        })?;

        for block in 1.. {
            let amt = read_data(src, &mut buf)?;
            let data = Frame::Data { block: block as u16, bytes: &buf[..amt], } .encode();
            
            socket.send(&data)?;
            let mut attapmt = 0;
            loop {
                match recv_ack(&socket) {
                    Err(err) if matches!(err.kind(), ErrorKind::WouldBlock | ErrorKind::TimedOut) =>
                    {
                        if attapmt == config.max_retransmit {
                            let err_msg = ErrMsg { code: AccessViolation, msg: "Max retransmit reached".into(), };
                            socket.send(&err_msg.encode())?;
                            return Err(ErrorKind::TimedOut.into());
                        }
                        socket.send(&data)?;
                        attapmt += 1;
                    }
                    Ok(num) if num == block as u16 => break,
                    Ok(num) => println!("Duplicate Ack: {num}, Current: {block}"),
                    Err(err) => return Err(err),
                }
            }
            if amt < config.block_size {
                return Ok(());
            }
        }
        Ok(())
    }

    pub fn recv_data(self, dst: &mut impl Write, config: Config) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(Some(config.timeout))?;

        let mut nbytes;
        let mut curr_block = 1;
        let mut buf = vec![0; config.block_size];

        match self.method {
            Method::Read => {
                socket.send_to(&Frame::Read(self.req).encode(), self.addr)?;
                let (amt, addr) = socket.recv_from(&mut buf)?;
                socket.connect(addr)?;
                nbytes = amt;
            }
            Method::Write => {
                socket.send_to(&Frame::Acknowledgment(0).encode(), self.addr)?;
                socket.connect(self.addr)?;
                nbytes = socket.recv(&mut buf)?;
            }
        }
        loop {
            recv_frame!(&buf[..nbytes], Frame::Data { block, bytes } => {
                if block == curr_block {
                    dst.write_all(&bytes)?;
                    curr_block = curr_block.wrapping_add(1);
                    if bytes.len() < config.block_size {
                        return Ok(());
                    }
                }
                socket.send(&Frame::Acknowledgment(block).encode())?;
            });
            nbytes = socket.recv(&mut buf)?;
        }
    }

}
