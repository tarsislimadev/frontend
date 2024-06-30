#!/usr/bin/sh

npm login --scope=@brtmvdl

npm publish --provenance --access public 

npm logout --scope=@brtmvdl
