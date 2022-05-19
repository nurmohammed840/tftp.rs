## Request Decoder

`Text` field is the data in ascii format, End with `0x0` byte.

Lets define the structure called `Text`, that knows how to decode.

<link rel="stylesheet" href="./assets/code.slideshow.css">
<div id="text_parser"></div>
<script type="module">
    import "./assets/index.js";
    code.text_parser(document.getElementById("text_parser"))
</script>