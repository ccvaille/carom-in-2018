#!/bin/sh
# check out a freash copy of jQuery
git clone git://github.com/jquery/jquery.git $1
cp $2.html $1/index.html
cd $1 && make

# ./gen.sh mytest dom 执行