#![allow(warnings)]
use crate::utils::recv_frame;
use crate::{sender::Config, Frame};
use bin_layout::Decoder;
use std::{
    io::{ErrorKind, Result},
    net::{ToSocketAddrs, UdpSocket},
    thread,
};

fn accept(socket: &mut UdpSocket) -> Result<()> {
    let mut buf = [0; 1024];
    let (n, addr) = socket.recv_from(&mut buf)?;

    recv_frame!(&buf[..n],
        Frame::Read(req) => thread::spawn(move || {
            println!("Read: {:#?}", req);
        }),
        Frame::Write(req) => thread::spawn(move || {
            println!("Write: {:#?}", req);
        })
    );
    Ok(())
}

pub fn listen(addr: impl ToSocketAddrs) -> Result<()> {
    let mut socket = UdpSocket::bind(addr)?;
    println!("Listening on {}", socket.local_addr()?);
    loop {
        if let Err(err) = accept(&mut socket) {
            println!("{err:#?}");
        }
    }
}
