#![allow(warnings)]

use crate::{macros::*, Frame, Request};
use bin_layout::{Decoder, Encoder};
use std::{io::*, net::*, time::Duration};

#[derive(Debug)]
pub enum Method {
    Read,
    Write,
}

#[derive(Debug)]
pub struct Context {
    pub req: Request,
    pub method: Method,
    pub addr: SocketAddr,
}

impl Context {
    pub fn send_data(self, src: &mut impl Read) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(Some(Duration::from_secs(self.req.options.timeout.into())))?;
        socket.send_to(&Frame::Write(self.req).encode(), self.addr)?;
        
        let mut buf = vec![0; 512];
        let (len, addr) = socket.recv_from(&mut buf)?;

        // recv_frame!(&buf[..len],
        //     Frame::Acknowledge(n) => check!(n == 0),
        //     Frame::OptAck(opts) => {
        //         opts
        //             .get("blksize")
        //             .and_then(|string| string.parse::<usize>().ok())
        //             .map(|size| buf = vec![0; size]);
        //     }
        // );
        // socket.connect(addr)?;

        // socket.connect(match self.method {
        //     Method::Write => {
        //         socket.send_to(&Frame::Write(self.req).encode(), self.addr)?;
        //         let (len, addr) = socket.recv_from(&mut buf)?;
        //         recv_frame!(&buf[..len],
        //             Frame::Acknowledge(n) => check!(n == 0),
        //             Frame::OptAck(opts) => {

        //             }
        //         );
        //         addr
        //     }
        //     Method::Read => self.addr,
        // })?;

        //         for block in 1.. {
        //             let amt = read_data(src, &mut buf)?;
        //             let data = Frame::Data {
        //                 block: block as u16,
        //                 bytes: &buf[..amt],
        //             }
        //             .encode();

        //             socket.send(&data)?;
        //             let mut attapmt = 0;
        //             loop {
        //                 match recv_ack(&socket) {
        //                     Err(err) if matches!(err.kind(), WouldBlock | TimedOut) => {
        //                         if attapmt == config.max_retransmit {
        //                             let err_msg = Frame::ErrMsg {
        //                                 code: AccessViolation,
        //                                 msg: "Max retransmit reached".into(),
        //                             };
        //                             socket.send(&err_msg.encode())?;
        //                             return Err(TimedOut.into());
        //                         }
        //                         socket.send(&data)?;
        //                         attapmt += 1;
        //                     }
        //                     Ok(num) if num == block as u16 => break,
        //                     Ok(num) => println!("Duplicate Ack: {num}, Current: {block}"),
        //                     Err(err) => return Err(err),
        //                 }
        //             }
        //             if amt < config.block_size {
        //                 return Ok(());
        //             }
        //         }
        Ok(())
    }

    //     pub fn recv_data(self, dst: &mut impl Write, config: Config) -> Result<()> {
    //         let socket = UdpSocket::bind("0.0.0.0:0")?;
    //         socket.set_read_timeout(Some(config.timeout))?;

    //         let mut nbytes;
    //         let mut curr_block = 1;
    //         let mut buf = vec![0; config.block_size];

    //         match self.method {
    //             Method::Read => {
    //                 socket.send_to(&Frame::Read(self.req).encode(), self.addr)?;
    //                 let (amt, addr) = socket.recv_from(&mut buf)?;
    //                 socket.connect(addr)?;
    //                 nbytes = amt;
    //             }
    //             Method::Write => {
    //                 socket.send_to(&Frame::Acknowledge(0).encode(), self.addr)?;
    //                 socket.connect(self.addr)?;
    //                 nbytes = socket.recv(&mut buf)?;
    //             }
    //         }
    //         loop {
    //             recv_frame!(&buf[..nbytes], Frame::Data { block, bytes } => {
    //                 socket.send(&Frame::Acknowledge(block).encode())?;
    //                 if block == curr_block {
    //                     dst.write_all(&bytes)?;
    //                     curr_block = curr_block.wrapping_add(1);
    //                     if bytes.len() < config.block_size {
    //                         return Ok(());
    //                     }
    //                 }
    //             });
    //             nbytes = socket.recv(&mut buf)?;
    //         }
    //     }
}
