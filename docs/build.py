# Usage: python build.py
# Generate The Book: python build.py book

import os
import sys
import subprocess

def execute_cmd(cmd):
    subprocess.call(cmd, shell=True)

def index_files(path):
    for filename in os.listdir(path):
        if filename.startswith('index'):
            yield filename

def move_or_replace_file(src, dist):
    if os.path.exists(dist):
        os.remove(dist)

    os.rename(src, dist)

# --------------------------------------------------------------------------

ids = []

for filename in os.listdir("./src/code"):
    name, ext = filename.split('.', 1)
    if ext == 'mdx':
        ids.append(name)

code = """<!-- Auto-generated file by build.py, Do not edit. -->
{}

<script type="module">
import "@code-hike/mdx/dist/index.css";
import React from 'react';
import ReactDOM from 'react-dom';
{}

window.code ??= {};
{}
</script>
""".format(
    '\n'.join(list(map(lambda x: '<div id="{}"></div>'.format(x), ids))),
    '\n'.join(list(map(lambda x: "import {x} from '/src/code/{x}.mdx';".format(x = x), ids))),
    "{}",
    '\n'.join(list(map(lambda x: 'window.code.{x} = ele => ReactDOM.render(React.createElement({x}), ele);'.format(x = x), ids))),
)

with open('./index.html', 'w') as file:
    file.write(code)
    
# ---------------------------------------------------------------------------

for filename in index_files('./dist/assets'):
    if filename.endswith('.js') or filename.endswith('.css'):
        file_path = './dist/assets/' + filename
        os.remove(file_path)
        print('Removed: ' + file_path)


execute_cmd('yarn build')


for filename in index_files('./dist/assets'):
    ext = os.path.splitext(filename)[1]
    src = './dist/assets/' + filename
    dist = './src/assets/index' + ext
    
    move_or_replace_file(src, dist)
    print('Moved: ' + src + ' -> ' + dist)


if len(sys.argv) > 1 and sys.argv[1] == 'book':
    execute_cmd('mdbook build')

