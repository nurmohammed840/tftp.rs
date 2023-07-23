use databuf::Result;
use tftp::*;

pub fn recv_msg(request: &Request) -> Result<String> {
    let mut buf = Vec::new();
    request.recv(&mut buf)?;
    Ok(String::from_utf8(buf)?)
}
