mod convert;
mod endpoint;
mod serialization;

use databuf::{Decode, Encode};
pub use endpoint::*;

#[derive(Debug, Clone)]
pub struct Text(pub String);

#[doc(hidden)]
#[derive(Debug)]
pub struct Bytes(pub Vec<u8>);

#[repr(u16)]
#[derive(Encode, Decode, Debug)]
pub enum ErrorCode {
    /// Not defined, see error message (if any)
    NotDefined,
    /// File not found
    FileNotFound,
    /// Access violation
    AccessViolation,
    /// Disk full or allocation exceeded
    DiskFull,
    /// Illegal TFTP operation
    IllegalOperation,
    /// Unknown transfer ID.
    UnknownTransferID,
    /// File already exists
    FileAlreadyExists,
    /// No such user
    NoSuchUser,
}

#[doc(hidden)]
#[repr(u16)]
#[derive(Encode, Decode, Debug)]
pub enum Frame {
    Read(Resource) = 1,
    Write(Resource) = 2,
    Data { block: u16, bytes: Bytes } = 3,
    Acknowledge(u16) = 4,
    Error(Error) = 5,
}

#[derive(Encode, Decode, Debug)]
pub struct Error {
    pub code: ErrorCode,
    pub reason: Text,
}

impl Frame {
    pub fn error(code: ErrorCode, reason: impl Into<Text>) -> Self {
        Self::Error(Error {
            code,
            reason: reason.into(),
        })
    }
}

#[derive(Encode, Decode, Debug, Clone)]
pub struct Resource {
    pub filename: Text,
    pub mode: Text,
}

impl Resource {
    pub fn new<I: Into<String>>(filename: I, mode: I) -> Self {
        Self {
            filename: Text(filename.into()),
            mode: Text(mode.into()),
        }
    }
}
