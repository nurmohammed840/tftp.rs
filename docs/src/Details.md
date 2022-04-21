# Details

### 1. Request

Client send a request to the server at port number 69, to read or write a file.

```rust
struct Request {
    filename: Text,
    mode: Text,
}
```

