use crate::*;
use macros::recv_frame;
use std::{
    io::{Error, ErrorKind, Result},
    net::*,
};

pub struct Server {
    buf: [u8; 512],
    pub socket: UdpSocket,
}

impl Server {
    pub fn listen(addr: impl ToSocketAddrs) -> Self {
        Self {
            buf: [0; 512],
            socket: UdpSocket::bind(addr).expect("Failed to bind socket"),
        }
    }

    pub fn accept(&mut self) -> Result<Context> {
        Ok(loop {
            let (nbytes, addr) = self.socket.recv_from(&mut self.buf)?;
            recv_frame!(&self.buf[..nbytes],
                Frame::Read(req) => break Context { addr, req, method: Method::Read },
                Frame::Write(req) => break Context { addr, req, method: Method::Write },
                _ => {
                    let error = Frame::error(ErrorCode::AccessViolation, "Only RRQ and WRQ are supported.");
                    self.socket.send_to(&error.encode(), addr)?;
                }
            );
        })
    }
}
