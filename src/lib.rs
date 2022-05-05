mod context;
mod serde;
mod server;
mod utils;

use bin_layout::{Decoder, Encoder};

pub use context::*;
pub use serde::Text;
pub use server::*;

use std::{
    io::*,
    net::{SocketAddr, UdpSocket},
    time::Duration,
};
pub(crate) use utils::*;
pub(crate) use ErrorCode::*;

//-------------------------------------------------------------------------------------

#[derive(Debug)]
pub enum ErrorCode {
    NotDefined = 1,
    FileNotFound,
    AccessViolation,
    DiskFull,
    IllegalOperation,
    UnknownTransferID,
    FileAlreadyExists,
    NoSuchUser,
}

/// The file name is a sequence of bytes terminated by a zero byte.
///
/// The mode field contains the string "netascii", "octet", or "mail" (case insensative).
#[derive(Debug, Clone)]
pub struct Request {
    pub filename: Text,
    pub mode: Text,
    pub options: Vec<(Text, Text)>,
}

impl Request {
    pub fn new<I: Into<String>>(name: I, mode: I) -> Self {
        Self {
            filename: Text(name.into()),
            mode: Text(mode.into()),
            options: vec![],
        }
    }
}

#[derive(Debug)]
pub enum Frame<'a> {
    Read(Request),
    Write(Request),
    /// The block numbers on data packets begin with one and increase by one for each new block of data.
    Data {
        block: u16,
        bytes: &'a [u8],
    },
    /// ACK's  used for termination are acknowledged unless a timeout occurs
    Acknowledge(u16),
    /// If a request can not be granted, or some error occurs during the transfer, then an ERROR packet (opcode 5) is sent.
    /// Timeouts must also be used to detect errors
    ErrMsg {
        code: ErrorCode,
        msg: Text,
    },
}
