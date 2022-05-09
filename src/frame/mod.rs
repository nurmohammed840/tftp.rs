mod error_code;
mod options;
mod request;
mod text;

pub(super) use bin_layout::*;
use Frame::*;

pub use error_code::ErrorCode;
pub use options::Options;
pub use request::Request;
pub use text::Text;

#[derive(Debug, PartialEq, Eq, Clone)]
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
    OptAck(Options)
}

impl<'a> Frame<'a> {
    pub fn error(code: ErrorCode, msg: impl Into<String>) -> Self {
        ErrMsg {
            code,
            msg: Text(msg.into()),
        }
    }
}

impl Encoder for Frame<'_> {
    fn encoder(self, c: &mut impl Array<u8>) {
        let opcode: u16 = match self {
            Read(..) => 1,
            Write(..) => 2,
            Data { .. } => 3,
            Acknowledge { .. } => 4,
            ErrMsg { .. } => 5,
            OptAck(..) => 6,
        };

        opcode.encoder(c);

        match self {
            Read(req) | Write(req) => req.encoder(c),
            Data { block, bytes } => {
                block.encoder(c);
                c.extend_from_slice(bytes);
            }
            Acknowledge(num) => num.encoder(c),
            ErrMsg { code, msg } => {
                (code as u16).encoder(c);
                msg.encoder(c);
            }
            OptAck(opts) => opts.encoder(c),
        }
    }
}

impl<'a, E: Error> Decoder<'a, E> for Frame<'a> {
    fn decoder(c: &mut Cursor<&'a [u8]>) -> Result<Self, E> {
        let opcode = u16::decoder(c)?;
        Ok(match opcode {
            1 => Read(Request::decoder(c)?),
            2 => Write(Request::decoder(c)?),
            3 => Data {
                block: u16::decoder(c)?,
                bytes: c.remaining_slice(),
            },
            4 => Acknowledge(u16::decoder(c)?),
            5 => ErrMsg {
                code: ErrorCode::decoder(c)?,
                msg: Text::decoder(c)?,
            },
            6 => OptAck(Options::decoder(c)?),
            _ => return Err(E::invalid_data()),
        })
    }
}
