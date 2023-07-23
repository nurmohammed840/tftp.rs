use crate::*;
use databuf::Result;
use std::{
    io::{self, ErrorKind, Read, Write},
    net::*,
    time::Duration,
};

#[derive(Debug, Clone, Copy)]
pub enum Method {
    Read,
    Write,
}

#[derive(Debug, Clone)]
pub struct Request {
    pub addr: SocketAddr,
    pub resource: Resource,
    pub timeout: Option<u64>,
    pub method: Method,
}

impl Request {
    pub fn method(&self) -> Method {
        self.method
    }
}

pub struct Server {
    buf: [u8; 512],
    pub socket: UdpSocket,
}

impl Server {
    pub fn bind(addr: impl ToSocketAddrs) -> io::Result<Self> {
        Ok(Self {
            buf: [0; 512],
            socket: UdpSocket::bind(addr)?,
        })
    }

    pub fn accept(&mut self) -> Result<Request> {
        loop {
            let (len, addr) = self.socket.recv_from(&mut self.buf)?;
            let (resource, method) = match Frame::parse(&self.buf[..len])? {
                Frame::Read(res) => (res, Method::Read),
                Frame::Write(res) => (res, Method::Write),
                frame => {
                    let error = Frame::error(
                        ErrorCode::AccessViolation,
                        format!("expected RRQ or WRQ, got: {frame:?}"),
                    );
                    self.socket.send_to(&error.as_bytes(), addr)?;
                    continue;
                }
            };
            return Ok(Request {
                addr,
                method,
                resource,
                timeout: None,
            });
        }
    }
}

impl Request {
    pub fn new(addr: impl Into<SocketAddr>, method: Method, resource: Resource) -> Self {
        Self {
            addr: addr.into(),
            method,
            resource,
            timeout: Some(3 * 1000),
        }
    }

    pub fn send(&self, reader: &mut impl Read) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(self.timeout.map(Duration::from_millis))?;

        let mut buf = [0; 512];

        socket.connect(match self.method {
            Method::Read => self.addr,
            Method::Write => {
                socket.send_to(&Frame::Write(self.resource.clone()).as_bytes(), self.addr)?;
                let (len, addr) = socket.recv_from(&mut buf)?;

                if !matches!(Frame::parse(&buf[..len])?, Frame::Acknowledge(num) if num == 0) {
                    err(&socket, "expected ack = 0")?;
                }
                addr
            }
        })?;

        for block in (1..=u16::MAX).cycle() {
            let len = fill_buf(reader, &mut buf)?;
            let data = Frame::Data {
                block,
                bytes: buf[..len].into(),
            };
            let data_frame = data.as_bytes();

            'retransmit: for count in 0.. {
                if count > 3 {
                    err(&socket, "max re-transmit reached")?;
                }
                socket.send(&data_frame)?;

                match socket.recv(&mut buf) {
                    Err(e) if matches!(e.kind(), ErrorKind::WouldBlock | ErrorKind::TimedOut) => {}
                    len => match Frame::parse(&buf[..len?])? {
                        Frame::Acknowledge(num) if num == block => break 'retransmit,
                        Frame::Acknowledge(_) => {}
                        frame => err(&socket, &format!("expcted acknowledge, got: {frame:?}"))?,
                    },
                };
            }
            if len < 512 {
                break;
            }
        }
        Ok(())
    }

    pub fn recv(&self, writer: &mut impl Write) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(self.timeout.map(Duration::from_millis))?;

        let mut buf = [0; 512];
        let mut len = match self.method {
            Method::Read => {
                socket.send_to(&Frame::Read(self.resource.clone()).as_bytes(), self.addr)?;
                let (len, addr) = socket.recv_from(&mut buf)?;
                socket.connect(addr)?;
                len
            }
            Method::Write => {
                socket.send_to(&Frame::Acknowledge(0).as_bytes(), self.addr)?;
                socket.connect(self.addr)?;
                socket.recv(&mut buf)?
            }
        };

        let mut curr_block = 1;
        loop {
            match Frame::parse(&buf[..len])? {
                Frame::Data { block, bytes } => {
                    socket.send(&Frame::Acknowledge(block).as_bytes())?;
                    if block == curr_block {
                        writer.write_all(&bytes)?;
                        curr_block = curr_block.wrapping_add(1);
                        if bytes.len() < 512 {
                            return Ok(());
                        }
                    }
                }
                frame => send_err(&socket, format!("expected data frame, got: {frame:?}"))?,
            }
            len = socket.recv(&mut buf)?;
        }
    }
}

fn fill_buf(reader: &mut impl Read, mut buf: &mut [u8]) -> io::Result<usize> {
    let mut len = 0;
    loop {
        match reader.read(buf) {
            Err(err) if err.kind() == ErrorKind::Interrupted => {}
            Ok(0) => return Ok(len),
            n => {
                let filled = n?;
                len += filled;
                buf = &mut buf[filled..];
            }
        }
    }
}

fn send_err(socket: &UdpSocket, msg: impl Into<Text>) -> Result<()> {
    let error = Frame::error(ErrorCode::IllegalOperation, msg);
    socket.send(&error.as_bytes())?;
    Ok(())
}

fn err(socket: &UdpSocket, msg: &str) -> Result<()> {
    send_err(socket, msg)?;
    Err(msg.into())
}
