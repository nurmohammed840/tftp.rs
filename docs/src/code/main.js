/* Auto-generated file (build.py). Do not edit. */
import React from 'react';
import ReactDOM from 'react-dom';
import errcode from '/src/code/errcode.mdx';
import frame from '/src/code/frame.mdx';
import frame_decoder from '/src/code/frame_decoder.mdx';
import frame_encoder from '/src/code/frame_encoder.mdx';
import text_parser from '/src/code/text_parser.mdx';

window.code ??= {};
window.code.errcode = ele => ReactDOM.render(React.createElement(errcode), ele);
window.code.frame = ele => ReactDOM.render(React.createElement(frame), ele);
window.code.frame_decoder = ele => ReactDOM.render(React.createElement(frame_decoder), ele);
window.code.frame_encoder = ele => ReactDOM.render(React.createElement(frame_encoder), ele);
window.code.text_parser = ele => ReactDOM.render(React.createElement(text_parser), ele);
