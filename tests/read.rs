// use std::{io::Cursor, thread};

// // use bin_layout::{Decoder, Encoder};
// use tftp::{Config, Context, Method, Request, Server};

// #[test]
// fn teast() {
//     let s = thread::spawn(server);
//     let c = thread::spawn(client);
//     c.join().unwrap();
//     s.join().unwrap();
// }

// #[test]
// fn client() {
//     let mut dst = vec![];

//     Context {
//         req: Request::new("text.txt", "text"),
//         method: Method::Read,
//         addr: "127.0.0.1:1234".parse().unwrap(),
//     }
//     .recv_data(&mut dst, Config::default()).unwrap();

//     println!("{:?}", String::from_utf8(dst));
// }

// #[test]
// fn server() {
//     let mut server = Server::listen("127.0.0.1:1234");

//     println!("Listening on: {:?}", server.socket.local_addr());
//     let ctx = server.accept().unwrap();

//     println!("{:?}", ctx);

//     match ctx.method {
//         Method::Read => {
//             let mut data = Cursor::new("Hello, World!");
//             ctx.send_data(&mut data, Config::default()).unwrap();
//         }
//         Method::Write => {}
//     }
// }
