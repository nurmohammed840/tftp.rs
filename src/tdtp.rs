use bin_layout::*;
use std::io;
use std::net::*;
use std::time::*;
use ErrorCode::*;
use Frame::*;

struct Text(String);

enum ErrorCode {
    NotDefined,
    FileNotFound,
    AccessViolation,
    DiskFull,
    IllegalOperation,
    UnknownTransferID,
    FileAlreadyExists,
    NoSuchUser,
}

#[derive(Encoder, Decoder)]
struct Request {
    filename: Text,
    mode: Text,
}

enum Frame<'a> {
    Read(Request),
    Write(Request),
    Data { block: u16, bytes: &'a [u8] },
    Acknowledge(u16),
    ErrMsg { code: ErrorCode, msg: Text },
}

//-----------------------------------------------------------------

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

// -----------------------------------------------------------------

macro_rules! check {
    ($cond:expr $(,)?) => {
        if !$cond {
            return Err(io::Error::new(
                io::ErrorKind::Other,
                format!("chack failed: {:?}", stringify!($cond)),
            ));
        }
    };
}
macro_rules! recv_frame {
    [$buf:expr, $($code:tt)*] => (
        match (Frame::decode($buf) as io::Result<_>)? {
            $($code)*,
            #[allow(unreachable_patterns)]
            _ => return Err(io::Error::new(io::ErrorKind::Other, "unexpected frame")),
        }
    );
}

// -----------------------------------------------------------------

#[derive(Debug)]
pub enum Method {
    Read,
    Write,
}

struct Context {
    req: Request,
    method: Method,
    addr: SocketAddr,
}

struct Server {
    buf: [u8; 512],
    socket: UdpSocket,
}

impl Server {
    fn listen(addr: impl ToSocketAddrs) -> Self {
        Self {
            buf: [0; 512],
            socket: UdpSocket::bind(addr).expect("Failed to bind socket"),
        }
    }

    fn accept(&mut self) -> io::Result<Context> {
        Ok(loop {
            let (len, addr) = self.socket.recv_from(&mut self.buf)?;
            recv_frame!(&self.buf[..len],
                Frame::Read(req) => break Context { addr, req, method: Method::Read },
                Frame::Write(req) => break Context { addr, req, method: Method::Write },
                _ => {
                    let error = ErrMsg {
                        code: ErrorCode::AccessViolation,
                        msg: Text( "Only RRQ and WRQ are supported.".into())
                    };
                    self.socket.send_to(&error.encode(), addr)?;
                }
            );
        })
    }
}

//-----------------------------------------------------------------------

impl Context {
    pub fn send_data(self, src: &mut impl io::Read) -> io::Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(Some(Duration::from_secs(7)))?;
        socket.send_to(&Frame::Write(self.req).encode(), self.addr)?;

        let mut buf = vec![0; 512];

        let (len, addr) = socket.recv_from(&mut buf)?;
        recv_frame!(&buf[..len], Frame::Acknowledge(n) => check!(n == 0));

        socket.connect(addr)?;

        for block in 1.. {
            let len = src.read(&mut buf)?;
            let data = Data {
                block: block as u16,
                bytes: &buf[..len],
            }
            .encode();
            socket.send(&data)?;

            let mut attapmt = 0;
            loop {
                let len = socket.recv(&mut buf)?;
                recv_frame!(&buf[..len], Frame::Acknowledge(n) => check!(n == 0));
            }
        }

        Ok(())
    }
}
