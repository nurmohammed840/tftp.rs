## Server Interface

Now we can start to define the interface.

<div id="server_struct"></div>

Keyword `pub` is used to export items from the module. It's also can be used to make an item [visible](https://doc.rust-lang.org/reference/visibility-and-privacy.html) to others.

<div id="server_methods"></div>

`listen()` function create a `Server` instance. You may think that `listen()` is a constructor function. 

`accept()` function accept a new incoming connection. If the request is  `RRQ` or `WRQ`, then create a new `Context` instance and return it.


### Context

<div id="ctx_struct"></div>

Context is a data structure that contains all the information about the current request and knows how to handle it.

<div id="ctx_methods"></div>


<link rel="stylesheet" href="./assets/code.css">
<script type="module" src="./code/interface.js"></script>