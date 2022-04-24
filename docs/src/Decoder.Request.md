## Request Decoder

`Text` field is the data in netascii (Modified version of ascii) format, End with `0x0` byte.

Lets define the structure called `Text`, that knows how to decode.

<style>
    .codeblock::-webkit-scrollbar {
        display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    .codeblock {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    .codeblock {
        width: 100%;
        overflow-y: hidden; /* Hide vertical scrollbar */
        overflow-x: hidden; /* Hide horizontal scrollbar */
    }

    button {
        background-color: #212121;
        color: #ddd;
        padding: 10px;
        border: none;
        cursor: pointer;
        font-size: 17px;
        border-radius: 5px;
    }
    
    /* matarial ui range input */
    
</style>
<link rel="stylesheet" href="./assets/code.slideshow.css">

<div class="codeblock">
    <div class="codeblock" id="decoder"></div>
</div>



<script type="module">
    import "/assets/index.js";
    code.text(document.getElementById("decoder"))
</script>
