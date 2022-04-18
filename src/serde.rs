use crate::{ErrorCode::*, Frame, Request};
use bin_layout::*;
use Frame::*;

#[derive(Debug)]
pub struct Text(pub String);

impl<T: Into<String>> From<T> for Text {
    fn from(data: T) -> Self {
        Text(data.into())
    }
}


impl Encoder for Text {
    fn encoder(self, c: &mut impl Array<u8>) {
        c.extend_from_slice(self.0);
        c.push(0);
    }
}

impl<E: Error> Decoder<'_, E> for Text {
    fn decoder(c: &mut Cursor<&[u8]>) -> Result<Self, E> {
        let len = c
            .remaining_slice()
            .iter()
            .position(|&b| b == 0)
            .ok_or_else(E::invalid_data)?;

        let data = c.read_slice(len).unwrap().to_vec();
        let text = String::from_utf8(data).map_err(E::from_utf8_err)?;
        Ok(Self(text))
    }
}

// ------------------------------------------------------------------------------------------

impl Encoder for Frame<'_> {
    fn encoder(self, c: &mut impl Array<u8>) {
        let opcode: u16 = match self {
            Read(_) => 1,
            Write(_) => 2,
            Data { .. } => 3,
            Acknowledgment { .. } => 4,
            ErrMsg { .. } => 5,
        };

        opcode.encoder(c);

        match self {
            Read(req) | Write(req) => req.encoder(c),
            Data { block, bytes } => {
                block.encoder(c);
                c.extend_from_slice(bytes);
            }
            Acknowledgment(block) => block.encoder(c),
            ErrMsg { code, msg } => {
                (code as u16).encoder(c);
                msg.encoder(c);
            }
        }
    }
}

impl<'a, E: Error> Decoder<'a, E> for Frame<'a> {
    fn decoder(c: &mut Cursor<&'a [u8]>) -> Result<Self, E> {
        let opcode = u16::decoder(c)?;
        let frame = match opcode {
            1 | 2 => Read(Request::decoder(c)?),
            3 => Data {
                block: u16::decoder(c)?,
                bytes: c.remaining_slice(),
            },
            4 => Acknowledgment(u16::decoder(c)?),
            5 => ErrMsg {
                code: match u16::decoder(c)? {
                    1 => NotDefined,
                    2 => FileNotFound,
                    3 => AccessViolation,
                    4 => DiskFull,
                    5 => IllegalOperation,
                    6 => UnknownTransferID,
                    7 => FileAlreadyExists,
                    8 => NoSuchUser,
                    _ => return Err(E::invalid_data()),
                },
                msg: Text::decoder(c)?,
            },
            _ => return Err(E::invalid_data()),
        };
        Ok(frame)
    }
}