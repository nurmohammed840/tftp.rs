// #![allow(deprecated)]
// use bin_layout::{Decoder, Encoder};
// use std::{io::Result, net::UdpSocket, thread};
// use tftp::{Frame, Request};

// #[test]
// fn test_name() {
//     let server = thread::spawn(|| {
//         let mut socket = UdpSocket::bind("127.0.0.1:1234").unwrap();
//         tftp::server::accept(&mut socket).unwrap();
//         thread::sleep_ms(1000);
//     });

//     let client = thread::spawn(|| {
//         thread::sleep_ms(100);
//         let socket = UdpSocket::bind("0.0.0.0:0").unwrap();

//         let req = Request {
//             filename: "test.txt".into(),
//             mode: "octet".into(),
//         };
//         socket
//             .send_to(&Frame::Read(req).encode(), "127.0.0.1:1234")
//             .unwrap();

//         loop {
//             let mut data = [0; 1500];
//             let (n, addr) = socket.recv_from(&mut data).unwrap();
//             let frame: Result<_> = Frame::decode(&data[..n]);
//             println!("Result ({addr}): {:?}", frame);
//         }
//     });
//     client.join().unwrap();
//     server.join().unwrap();
// }
