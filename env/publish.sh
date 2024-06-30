#!/usr/bin/sh

npm login --scope=@brtmvdl --registry=https://registry.npmjs.org

npm publish --access public

npm logout --scope=@brtmvdl --registry=https://registry.npmjs.org
