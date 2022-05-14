use crate::*;
use bin_layout::*;

impl Encoder for Text {
    fn encoder(self, arr: &mut impl Array<u8>) {
        arr.extend_from_slice(self.0);
        arr.push(0);
    }
}

impl<E: Error> Decoder<'_, E> for Text {
    fn decoder(c: &mut Cursor<&[u8]>) -> Result<Self, E> {
        let bytes: Vec<u8> = c
            .remaining_slice()
            .iter()
            .take_while(|&b| *b != 0)
            .copied()
            .collect();

        c.offset += bytes.len() + 1;
        let string = String::from_utf8(bytes).map_err(E::from_utf8_err)?;
        Ok(Text(string))
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
                    1 => FileNotFound,
                    2 => AccessViolation,
                    3 => DiskFull,
                    4 => IllegalOperation,
                    5 => UnknownTransferID,
                    6 => FileAlreadyExists,
                    7 => NoSuchUser,
                    _ => NotDefined,
                },
                msg: Text::decoder(c)?,
            },
            _ => return Err(E::invalid_data()),
        })
    }
}
