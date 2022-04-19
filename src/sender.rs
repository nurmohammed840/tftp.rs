use std::time::Duration;

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
pub(crate) use check;

#[derive(Debug)]
pub struct Config {
    pub timeout: Duration,
    pub block_size: usize,
    pub max_retransmit: usize,
    pub window_size: usize,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            block_size: 1468,
            max_retransmit: 3,
            timeout: Duration::from_secs(7),
            window_size: 8,
        }
    }
}
