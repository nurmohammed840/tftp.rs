## Frame Layout

Packet does not come in such beautiful structure, Data comes in binary format. So we need to decode it. We will use a library called [bin-layout](https://github.com/nurmohammed840/bin-layout.rs) to decode the binary data.

```toml
[dependencies]
bin-layout = "5"
```

![Data Format](./assets/data_format.svg)