## Request Decoder

`Text` field is the data in ascii format, End with `0x0` byte.

Lets define the structure called `Text`, that knows how to decode.

<link rel="stylesheet" href="./assets/code.slideshow.css">
<div id="request_decoder"></div>
<script type="module">
    import "./assets/index.js";
    code.request_decoder(document.getElementById("request_decoder"))
</script>