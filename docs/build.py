import os
import sys
import subprocess

ids = []

for filename in os.listdir("./src/code"):
    name, ext = filename.split('.', 1)
    if ext == 'mdx':
        ids.append(name)

code = """/* Auto-generated file (build.py). Do not edit. */
import React from 'react';
import ReactDOM from 'react-dom';
{}

window.code ??= {};
{}
""".format(
    '\n'.join(list(map(lambda x: "import {x} from '/src/code/{x}.mdx';".format(x = x), ids))),
    "{}",
    '\n'.join(list(map(lambda x: 'window.code.{x} = ele => ReactDOM.render(React.createElement({x}), ele);'.format(x = x), ids))),
)

with open('./src/code/main.js', 'w') as file:
    file.write(code)
    
# ---------------------------------------------------------------------------

def execute_cmd(cmd):
    subprocess.call(cmd, shell=True)

execute_cmd('yarn build')

if len(sys.argv) > 1 and sys.argv[1] == 'book':
    execute_cmd('mdbook clean')
    execute_cmd('mdbook build')

