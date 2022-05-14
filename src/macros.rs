macro_rules! check {
    ($cond:expr $(,)?) => {
        if !$cond {
            return Err(std::io::Error::new(
                std::io::ErrorKind::Other,
                format!("chack failed: {:?}", stringify!($cond)),
            ));
        }
    };
}
macro_rules! recv_frame {
    [$buf:expr, $($code:tt)*] => (
        match (Frame::decode($buf) as std::io::Result<_>)? {
            $($code)*,
            #[allow(unreachable_patterns)]
            _ => return Err(std::io::Error::new(std::io::ErrorKind::Other, "unexpected frame")),
        }
    );
}

pub(crate) use check;
pub(crate) use recv_frame;