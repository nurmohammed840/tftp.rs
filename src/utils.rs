use crate::*;

macro_rules! check {
    ($cond:expr $(,)?) => {
        if !$cond {
            return Err(Error::new(
                ErrorKind::Other,
                format!("chack failed: {:?}", stringify!($cond)),
            ));
        }
    };
}
macro_rules! recv {
    [$socket: expr, $buf: expr, $($code:tt)*] => ({
        let n = $socket.recv($buf)?;
        recv!(&mut $buf[..n], $($code)*)
    });
    ($buf:expr, $($code:tt)*) => (
        match (Frame::decode($buf) as Result<_>)? {
            $($code)*,
            #[allow(unreachable_patterns)]
            _ => return Err(ErrorKind::InvalidData.into()),
        }
    );
}

pub(crate) use check;
pub(crate) use recv as recv_frame;

pub fn recv_ack(socket: &UdpSocket) -> Result<u16> {
    let mut buf = [0; 4];
    recv!(socket, buf.as_mut(), Frame::Acknowledge(ack) => Ok(ack))
}

pub fn read_data(src: &mut impl Read, mut buf: &mut [u8]) -> Result<usize> {
    let mut read = 0;
    loop {
        // Optimization: Avoid system call, if slice is empty.
        if buf.is_empty() {
            return Ok(read);
        }
        match src.read(buf) {
            Ok(0) => return Ok(read),
            Ok(n) => {
                read += n;
                buf = &mut buf[n..];
            }
            Err(ref err) if err.kind() == ErrorKind::Interrupted => {}
            Err(err) => return Err(err),
        }
    }
}