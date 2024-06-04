# [@brtmvdl/frontend](https://www.npmjs.com/package/@brtmvdl/frontend)

[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/frontend/npm-publish.yml?label=npm%20publish&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Ffrontend%2Factions%2Fworkflows%2Fnpm-publish.yml)](https://github.com/brtmvdl/frontend/actions/workflows/npm-publish.yml) [![npm](https://img.shields.io/npm/dw/%40brtmvdl/frontend?label=npm%20downloads)](https://www.npmjs.com/package/@brtmvdl/frontend) [![github/stars](https://img.shields.io/github/stars/brtmvdl/frontend?style=social)](https://img.shields.io/github/stars/brtmvdl/frontend?style=social) 

Easy Front-end Node.js library

[See an example](https://github.com/brtmvdl/frontend-example)

## social & donate

[Donate](https://link.mercadopago.com.br/brtmvdl) - [Telegram](https://t.me/+KRmg5MlqgMk0MTg5) - [Discord](https://discord.gg/auCmnvV2)

## how to install

```bash
# bash

npm i @brtmvdl/frontend
mv node_modules libs
```

## how to use

```html
<!-- index.html -->

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Front-end</title>
  <script type="importmap">
    {
      "imports": {
        "@brtmvdl/frontend": "https://cdn.jsdelivr.net/npm/@brtmvdl/frontend@2.0.1/src/index.js"
      }
    }
  </script>
</head>

<body>
  <div id="app"></div>
  <script type="module" src="./index.js"></script>
</body>
</html>
```

```js
// index.js

import { HTML, nInput, nButton } from '@brtmvdl/frontend'

const app = HTML.fromId('app')

const input = new nInput()
input.setPlaceholder('input')
app.append(input)

const button = new nButton()
button.setText('button')
button.on('click', () => window.alert(`value: ${input.getValue()}`))
app.append(button)
```

## license

[MIT](./LICENSE)
