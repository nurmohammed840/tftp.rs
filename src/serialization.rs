use crate::*;
use databuf::{config::num::BE, Result};
use std::io::{self, BufRead, Write};

impl Encode for Text {
    fn encode<const CONFIG: u16>(&self, writer: &mut (impl Write + ?Sized)) -> io::Result<()> {
        writer.write_all(self.0.as_bytes())?;
        writer.write_all(&[0])
    }
}

impl Decode<'_> for Text {
    fn decode<const CONFIG: u16>(reader: &mut &[u8]) -> Result<Self> {
        let mut buf = Vec::new();
        reader.read_until(0, &mut buf)?;
        if let Some(0) = buf.last() {
            buf.pop();
        }
        Ok(Text(String::from_utf8(buf)?))
    }
}

impl Encode for Bytes {
    fn encode<const CONFIG: u16>(&self, writer: &mut (impl Write + ?Sized)) -> io::Result<()> {
        writer.write_all(&self.0)
    }
}

impl Decode<'_> for Bytes {
    fn decode<const CONFIG: u16>(reader: &mut &[u8]) -> Result<Self> {
        Ok(Bytes(reader.to_vec()))
    }
}

impl Frame {
    pub fn parse(bytes: &[u8]) -> Result<Self> {
        let frame = Frame::from_bytes::<BE>(bytes)?;
        if let Frame::Error(err) = frame {
            return Err(Box::new(err));
        }
        Ok(frame)
    }

    pub fn as_bytes(&self) -> Vec<u8> {
        self.to_bytes::<BE>()
    }
}
