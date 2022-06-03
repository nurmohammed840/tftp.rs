use crate::*;
use std::io;
use std::io::ErrorKind::{TimedOut, WouldBlock};
use std::io::*;
use std::net::*;
use std::time::Duration;

#[derive(Debug, Clone, Copy)]
pub enum Method {
    Read,
    Write,
}

pub struct Context {
    pub req: Request,
    pub method: Method,
    pub addr: SocketAddr,
}

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
            let (len, addr) = self.socket.recv_from(&mut self.buf)?;
            recv_frame!(&self.buf[..len],
                Read(req) => break Context { addr, req, method: Method::Read },
                Write(req) => break Context { addr, req, method: Method::Write },
                _ => {
                    let error = ErrMsg {
                        code: AccessViolation,
                        msg: Text( "Only RRQ and WRQ are supported.".into())
                    };
                    self.socket.send_to(&error.encode(), addr)?;
                }
            );
        })
    }
}

fn recv_ack(socket: &UdpSocket) -> Result<u16> {
    let mut buf = vec![0; 512];
    let len = socket.recv(&mut buf)?;
    recv_frame!(&mut buf[..len], Acknowledge(ack) => Ok(ack))
}

impl Context {
    pub fn send_data(self, reader: &mut impl io::Read) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(Some(Duration::from_secs(7)))?;

        let mut buf = [0; 512];

        socket.connect(match self.method {
            Method::Write => {
                socket.send_to(&Write(self.req).encode(), self.addr)?;
                let (len, addr) = socket.recv_from(&mut buf)?;
                recv_frame!(&buf[..len], Acknowledge(n) => check!(n == 0));
                addr
            }
            Method::Read => self.addr,
        })?;

        let mut is_last_block = false;

        for block in 1.. {
            if is_last_block { break }
            let len = reader.read(&mut buf)?;
            if len < 512 { is_last_block = true }

            let data = Data { block: block as u16, bytes: &buf[..len] }.encode();
            socket.send(&data)?;

            let mut attapmt = 0;
            loop {
                match recv_ack(&socket) {
                    Err(err) if matches!(err.kind(), WouldBlock | TimedOut) => {
                        if attapmt == 3 {
                            let err_msg = ErrMsg { 
                                code: AccessViolation,
                                msg: Text("Max retransmit reached".into()) 
                            };
                            socket.send(&err_msg.encode())?;
                            return Err(err);
                        }
                        socket.send(&data)?;
                        attapmt += 1;
                    }
                    Ok(num) if num == block as u16 => break,
                    Ok(num) => println!("Ignoring duplicate ACK: {num}"),
                    Err(err) => return Err(err),
                }
            }
        }
        Ok(())
    }

    pub fn recv_data(self, writer: &mut impl io::Write) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(Some(Duration::from_secs(7)))?;

        let mut buf = [0; 512];
        let mut len = match self.method {
            Method::Read => {
                socket.send_to(&Read(self.req).encode(), self.addr)?;
                let (len, addr) = socket.recv_from(&mut buf)?;
                socket.connect(addr)?;
                len
            }
            Method::Write => {
                socket.send_to(&Acknowledge(0).encode(), self.addr)?;
                socket.connect(self.addr)?;
                socket.recv(&mut buf)?
            }
        };

        let mut curr_block = 1;
        loop {
            recv_frame!(&buf[..len], Data { block, bytes } => {
                socket.send(&Acknowledge(block).encode())?;
                if block == curr_block {
                    writer.write_all(&bytes)?;
                    curr_block = curr_block.wrapping_add(1);
                    if bytes.len() < 512 { return Ok(()) }
                }
            });
            len = socket.recv(&mut buf)?;
        }
    }
}
