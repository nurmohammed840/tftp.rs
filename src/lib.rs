use bin_layout::{Decoder, Encoder};
use serde::Text;

mod serde;
mod utils;
mod sender;
mod server;

#[derive(Debug)]
pub enum ErrorCode {
    NotDefined,
    FileNotFound,
    AccessViolation,
    DiskFull,
    IllegalOperation,
    UnknownTransferID,
    FileAlreadyExists,
    NoSuchUser,
}

/// The file name is a sequence of bytes in netascii terminated by a zero byte.
///
/// The mode field contains the string "netascii", "octet", or "mail" (case insensative) in netascii
/// indicating the three modes defined in the protocol.
#[derive(Debug, Encoder, Decoder)]
pub struct Request {
    pub filename: Text,
    pub mode: Text,
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
    Acknowledgment(u16),
    /// If a request can not be granted, or some error occurs during the transfer, then an ERROR packet (opcode 5) is sent.
    /// Timeouts must also be used to detect errors
    ErrMsg {
        code: ErrorCode,
        msg: Text,
    },
}
