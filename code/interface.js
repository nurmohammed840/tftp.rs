import { render } from "../assets/ch.min.js";
import theme from "https://esm.sh/shiki@0.10.1/themes/github-dark.json" assert { type: "json" }

let server_struct = `~~~rust
use std::io::*;
use std::net::*;

pub struct Server {
    buf: [u8; 512],
    pub socket: UdpSocket,
}
~~~`


let server_methods = `~~~rust
impl Server {
    pub fn listen(addr: impl ToSocketAddrs) -> Self {
        Self {
            buf: [0; 512],
            socket: UdpSocket::bind(addr).expect("Failed to bind socket"),
        }
    }

    pub fn accept(&mut self) -> Result<Context> {
        Ok(loop {
            let (len, addr) = self.socket.recv_from(&mut self.buf)?;
            match Frame::decode(&self.buf[..len])? {
                Read(req) => break Context { addr, req, method: Method::Read },
                Write(req) => break Context { addr, req, method: Method::Write },
                _ => {
                    let error = ErrMsg {
                        code: AccessViolation,
                        msg: Text( "Only RRQ and WRQ are supported.".into())
                    };
                    self.socket.send_to(&error.encode(), addr)?;
                }
            }
        })
    }
}
~~~`


let ctx_struct = `~~~rust
pub enum Method {
    Read,
    Write,
}

pub struct Context {
    pub req: Request,
    pub method: Method,
    pub addr: SocketAddr,
}
~~~`

let ctx_methods = `
<CH.Slideshow>

~~~rust
impl Context {
    pub fn send_data(self, reader: &mut impl io::Read) -> Result<()> {
        Ok(())
    }
}
~~~

\`send_data()\` method accept anything that implement [io::Read](https://doc.rust-lang.org/std/io/trait.Read.html) trait.

So you can send anything, not just file! for example raw bytes, stream, stdin etc...

---

~~~rust focus=3
impl Context {
    pub fn send_data(self, reader: &mut impl io::Read) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        Ok(())
    }
}
~~~

Any data has to be transmitted with the new socket. by using this \`0.0.0.0:0\` special address, the system will bind an available address and port for this socket.

---

~~~rust focus=4
impl Context {
    pub fn send_data(self, reader: &mut impl io::Read) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(Some(Duration::from_secs(7)))?;
        Ok(())
    }
}
~~~

Any read operation would fail after given timeout. 

---

~~~rust focus=5
impl Context {
    pub fn send_data(self, reader: &mut impl io::Read) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(Some(Duration::from_secs(7)))?;
        socket.connect(self.addr)?;
        Ok(())
    }
}
~~~

We might get unexpect frame from outside world. In this case, It's recommended to send them a proper error message and ignore such packets.

luckly [connect()](https://doc.rust-lang.org/std/net/struct.UdpSocket.html#method.connect) method on socket applies filters to only receive data from the specified address. And allow the [send](https://doc.rust-lang.org/std/net/struct.UdpSocket.html#method.send) and [recv](https://doc.rust-lang.org/std/net/struct.UdpSocket.html#method.recv) syscalls to be used to send data.

In this example, Server listening acknowledgement frame from client.

---

~~~rust focus=7
    pub fn send_data(self, reader: &mut impl io::Read) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(Some(Duration::from_secs(7)))?;

        socket.connect(match self.method {
            Method::Write => {
                socket.send_to(&Write(self.req).encode(), self.addr)?;
                todo!()
            }
            Method::Read => self.addr,
        })?;

        Ok(())
    }
}
~~~

However \`send_data()\` function also can be used to send data from client to server. So, We provide a monolithic codebase.

Here, Client send a WRQ to server.

---

~~~rust focus=5,10:12
    pub fn send_data(self, reader: &mut impl io::Read) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(Some(Duration::from_secs(7)))?;

        let mut buf = [0; 512];

        socket.connect(match self.method {
            Method::Write => {
                socket.send_to(&Write(self.req).encode(), self.addr)?;
                let (len, addr) = socket.recv_from(&mut buf)?;
                recv_frame!(&buf[..len], Acknowledge(n) => check!(n == 0));
                addr
            }
            Method::Read => self.addr,
        })?;

        Ok(())
    }
}
~~~

On write request, Server must send an acknowledgement to the sender. We chacked that acknowledgement number must be zero, and connect to receiver address.

---

~~~rust focus=11:13
        socket.connect(match self.method {
            Method::Write => {
                socket.send_to(&Write(self.req).encode(), self.addr)?;
                let (len, addr) = socket.recv_from(&mut buf)?;
                recv_frame!(&buf[..len], Acknowledge(n) => check!(n == 0));
                addr
            }
            Method::Read => self.addr,
        })?;

        for block in 1.. {
            let len = reader.read(&mut buf)?;
        }
        Ok(())
    }
}
~~~

Initially, Data block number is 1, On each transfer, the number is incremented by one.

[read()](https://doc.rust-lang.org/std/io/trait.Read.html#tymethod.read) method,
Pull some bytes from \`reader\` into the \`buf\`, and return how many bytes were read.

---

~~~rust focus=11,14,16
        socket.connect(match self.method {
            Method::Write => {
                socket.send_to(&Write(self.req).encode(), self.addr)?;
                let (len, addr) = socket.recv_from(&mut buf)?;
                recv_frame!(&buf[..len], Acknowledge(n) => check!(n == 0));
                addr
            }
            Method::Read => self.addr,
        })?;

        let mut is_last_block = false;

        for block in 1.. {
            if is_last_block { break }
            let len = reader.read(&mut buf)?;
            if len < 512 { is_last_block = true }
        }
        Ok(())
    }
}
~~~

If \`len\` is less then 512 bytes, then next iteration will break this loop. 

---

~~~rust focus=6,7
        for block in 1.. {
            if is_last_block { break }
            let len = reader.read(&mut buf)?;
            if len < 512 { is_last_block = true }

            let data = Data { block: block as u16, bytes: &buf[..len] }.encode();
            socket.send(&data)?;
        }
        Ok(())
    }
}
~~~

Integer literals whose type is unconstrained will default to \`i32\`, so we need to cast \`block\` number type as \`u16\`.  

---

~~~rust focus=4:10
            let data = Data { block: block as u16, bytes: &buf[..len] }.encode();
            socket.send(&data)?;

            loop {
                match recv_ack(&socket) {
                    Ok(num) if num == block as u16 => break,
                    Ok(num) => println!("Ignoring duplicate ACK: {num}"),
                    Err(err) => return Err(err),
                }
            }
        }
        Ok(())
    }
}
~~~

Dupicate ACKs are ignored.

---

~~~rust focus=6:8
            let data = Data { block: block as u16, bytes: &buf[..len] }.encode();
            socket.send(&data)?;

            loop {
                match recv_ack(&socket) {
                    Err(err) if matches!(err.kind(), WouldBlock | TimedOut) => {
                        socket.send(&data)?;
                    }
                    Ok(num) if num == block as u16 => break,
                    Ok(num) => println!("Ignoring duplicate ACK: {num}"),
                    Err(err) => return Err(err),
                }
            }
        }
        Ok(())
    }
}
~~~

On Timeout, We send the data again.

---

~~~rust focus=4,8:15,17
            let data = Data { block: block as u16, bytes: &buf[..len] }.encode();
            socket.send(&data)?;

            let mut attapmt = 0;
            loop {
                match recv_ack(&socket) {
                    Err(err) if matches!(err.kind(), WouldBlock | TimedOut) => {
                        if attapmt == 3 {
                            let err_msg = ErrMsg { 
                                code: AccessViolation,
                                msg: Text("Max retransmit reached".into()) 
                            };
                            socket.send(&err_msg.encode())?;
                            return Err(err);
                        }
                        socket.send(&data)?;
                        attapmt += 1;
                    }
                    Ok(num) if num == block as u16 => break,
                    Ok(num) => println!("Ignoring duplicate ACK: {num}"),
                    Err(err) => return Err(err),
                }
            }
        }
        Ok(())
    }
}
~~~

Max retransmit is 3.

---

~~~rust focus=10
                    Ok(num) if num == block as u16 => break,
                    Ok(num) => println!("Ignoring duplicate ACK: {num}"),
                    Err(err) => return Err(err),
                }
            }
        }
        Ok(())
    }

    pub fn recv_data(self, writer: &mut impl io::Write) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(Some(Duration::from_secs(7)))?;

        let mut buf = [0; 512];
        let mut len = match self.method {
            Method::Read => {
                socket.send_to(&Read(self.req).encode(), self.addr)?;
                let (len, addr) = socket.recv_from(&mut buf)?;
                socket.connect(addr)?;
                len
            }
            Method::Write => {
                socket.send_to(&Acknowledge(0).encode(), self.addr)?;
                socket.connect(self.addr)?;
                socket.recv(&mut buf)?
            }
        };
    }
}
~~~

\`recv_data\` method accept anythig that implements [io::Write](https://doc.rust-lang.org/stable/std/io/trait.Write.html) trait. for example, raw bytes, socket, file, stdout etc.

---

~~~rust focus=5,8:11
    pub fn recv_data(self, writer: &mut impl io::Write) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(Some(Duration::from_secs(7)))?;

        let mut buf = [0; 512];
        let mut len = match self.method {
            Method::Read => {
                socket.send_to(&Read(self.req).encode(), self.addr)?;
                let (len, addr) = socket.recv_from(&mut buf)?;
                socket.connect(addr)?;
                len
            }
            Method::Write => {
                socket.send_to(&Acknowledge(0).encode(), self.addr)?;
                socket.connect(self.addr)?;
                socket.recv(&mut buf)?
            }
        };
    }
}
~~~

On read request, Server sends requested \`Data\` from new socket. 

Client now knows the address of that newly created socket, and can send \`Acknowledge\` to server.

---

~~~rust focus=5,14:16
    pub fn recv_data(self, writer: &mut impl io::Write) -> Result<()> {
        let socket = UdpSocket::bind("0.0.0.0:0")?;
        socket.set_read_timeout(Some(Duration::from_secs(7)))?;

        let mut buf = [0; 512];
        let mut len = match self.method {
            Method::Read => {
                socket.send_to(&Read(self.req).encode(), self.addr)?;
                let (len, addr) = socket.recv_from(&mut buf)?;
                socket.connect(addr)?;
                len
            }
            Method::Write => {
                socket.send_to(&Acknowledge(0).encode(), self.addr)?;
                socket.connect(self.addr)?;
                socket.recv(&mut buf)?
            }
        };
    }
}
~~~

On write request, Server sends \`Acknowledge\` packet of block number 0. 

---

~~~rust focus=8:13
            Method::Write => {
                socket.send_to(&Acknowledge(0).encode(), self.addr)?;
                socket.connect(self.addr)?;
                socket.recv(&mut buf)?
            }
        };

        loop {
            recv_frame!(&buf[..len], Data { block, bytes } => {
                socket.send(&Acknowledge(block).encode())?;
            });
            len = socket.recv(&mut buf)?;
        }
    }
}
~~~

Each time an endpoint receives \`Data\` packet, it sends \`Acknowledge\` packet of same block number.

---

~~~rust focus=7,11:15
            Method::Write => {
                socket.send_to(&Acknowledge(0).encode(), self.addr)?;
                socket.connect(self.addr)?;
                socket.recv(&mut buf)?
            }
        };
        let mut curr_block = 1;
        loop {
            recv_frame!(&buf[..len], Data { block, bytes } => {
                socket.send(&Acknowledge(block).encode())?;
                if block == curr_block {
                    writer.write_all(&bytes)?;
                    curr_block = curr_block.wrapping_add(1);
                    if bytes.len() < 512 { return Ok(()) }
                }
            });
            len = socket.recv(&mut buf)?;
        }
    }
}
~~~

When the block number is equal to current block number, the data is written to the writer. and the current block number is incremented. If the data is less than 512 bytes, the loop is exited.

</CH.Slideshow>
`

render("server_struct", server_struct, { theme });
render("server_methods", server_methods, { theme });
render("ctx_struct", ctx_struct, { theme });
render("ctx_methods", ctx_methods, { theme });