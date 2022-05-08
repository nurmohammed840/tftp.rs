use bin_layout::*;
use ErrorCode::*;

#[derive(Debug, PartialEq, Eq, Clone)]
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

impl ErrorCode {
    pub fn new(code: u16) -> Self {
        match code {
            1 => FileNotFound,
            2 => AccessViolation,
            3 => DiskFull,
            4 => IllegalOperation,
            5 => UnknownTransferID,
            6 => FileAlreadyExists,
            7 => NoSuchUser,
            _ => NotDefined,
        }
    }
}

impl Encoder for ErrorCode {
    fn encoder(self, c: &mut impl Array<u8>) {
        (self as u16).encoder(c);
    }
}

impl<E: Error> Decoder<'_, E> for ErrorCode {
    fn decoder(c: &mut Cursor<&[u8]>) -> Result<Self, E> {
        Ok(Self::new(u16::decoder(c)?))
    }
}
