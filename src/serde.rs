use crate::{ErrorCode::*, Frame, Request};
use bin_layout::*;
use std::{fmt, str};
use Frame::*;

impl Encoder for Frame<'_> {
    fn encoder(self, c: &mut impl Array<u8>) {
        let opcode: u16 = match self {
            Read(_) => 1,
            Write(_) => 2,
            Data { .. } => 3,
            Acknowledge { .. } => 4,
            ErrMsg { .. } => 5,
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
                code: match u16::decoder(c)? {
                    0 => NotDefined,
                    1 => FileNotFound,
                    2 => AccessViolation,
                    3 => DiskFull,
                    4 => IllegalOperation,
                    5 => UnknownTransferID,
                    6 => FileAlreadyExists,
                    7 => NoSuchUser,
                    _ => return Err(E::invalid_data()),
                },
                msg: Text::decoder(c)?,
            },
            _ => return Err(E::invalid_data()),
        })
    }
}
//========================================================================

impl Encoder for Request {
    fn encoder(self, c: &mut impl Array<u8>) {
        self.filename.encoder(c);
        self.mode.encoder(c);
        for (key, value) in self.options {
            key.encoder(c);
            value.encoder(c);
        }
    }
}

impl<E: Error> Decoder<'_, E> for Request {
    fn decoder(c: &mut Cursor<&[u8]>) -> Result<Self, E> {
        Ok(Self {
            filename: Text::decoder(c)?,
            mode: Text::decoder(c)?,
            options: {
                let mut options = Vec::with_capacity(3);
                while c.remaining_slice().len() > 0 {
                    options.push((Text::decoder(c)?, Text::decoder(c)?));
                }
                options
            },
        })
    }
}

//========================================================================

#[derive(Clone)]
pub struct Text(pub String);

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

        let data = c.read_slice(len).unwrap();
        let text = str::from_utf8(data).map_err(E::utf8_err)?.to_owned();
        c.offset += 1;
        Ok(Self(text))
    }
}

impl<T: Into<String>> From<T> for Text {
    fn from(data: T) -> Self {
        Text(data.into())
    }
}
impl std::ops::Deref for Text {
    type Target = String;
    fn deref(&self) -> &Self::Target {
        &self.0
    }
}
impl fmt::Debug for Text {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}
