use crate::*;
use bin_layout::{Decoder, Encoder};
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
        let frame = Frame::ErrMsg {
            code,
            msg: Text(msg.into()),
        };
        self.socket.send_to(&frame.encode(), addr)
    }

    pub fn accept(&mut self) -> Result<Context> {
        Ok(loop {
            let (amt, addr) = self.socket.recv_from(&mut self.buf)?;
            recv_frame!(&self.buf[..amt],
                Frame::Read(req) => break Context { addr, req, method: Method::Read },
                Frame::Write(req) => break Context { addr, req, method: Method::Write },
                _ => self.send_err(addr, AccessViolation, "Only read and write requests are supported.")?
            );
        })
    }
}
