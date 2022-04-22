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

def move_and_replace_file(src, dist):
    if os.path.exists(dist):
        os.remove(dist)

    os.rename(src, dist)


for filename in index_files('./dist/assets'):
    if filename.endswith('.js') or filename.endswith('.css'):
        file_path = './dist/assets/' + filename
        os.remove(file_path)
        print('Removed: ' + file_path)


execute_cmd('yarn build')


for filename in index_files('./dist/assets'):
    extension = os.path.splitext(filename)[1]
    src = './dist/assets/' + filename
    dist = './src/assets/index' + extension
    
    move_and_replace_file(src, dist)
    print('Moved: ' + src + ' -> ' + dist)


if len(sys.argv) > 1 and sys.argv[1] == 'book':
    execute_cmd('mdbook build')

