# [@brtmvdl/frontend](https://www.npmjs.com/package/@brtmvdl/frontend)

Easy Front-end Node.js library

[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/frontend/npm-publish.yml?label=GitHub%20Actions&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Ffrontend%2Factions%2Fworkflows%2Fnpm-publish.yml)](https://github.com/brtmvdl/frontend/actions/workflows/npm-publish.yml) [![npm](https://img.shields.io/npm/dw/%40brtmvdl/frontend?label=NPM%20Weekly%20Downloads)](https://www.npmjs.com/package/@brtmvdl/frontend) [![github/stars](https://img.shields.io/github/stars/brtmvdl/frontend?style=social)](https://img.shields.io/github/stars/brtmvdl/frontend?style=social) 

## Socials

<a href="https://discord.gg/d3EtbdcN" style="display: inline-block; width: 360px;">
  <img alt="Discord logo" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b50aa9e99958d574a23_full_logo_black_RGB.png"/>
</a>

<a href="https://t.me/+KRmg5MlqgMk0MTg5" style="display: inline-block; width: 360px;">
  <img alt="Telegram logo" src="https://www.forestrysouthafrica.co.za/wp-content/uploads/2020/01/Telegram-logo-Featured-1024x538.jpg"/>
</a>

## install

```bash
npm i @brtmvdl/frontend
```

## hot to use

```html
<!-- index.html -->

<head>
  <script type="importmap">
    {
      "imports": {
        "@brtmvdl/frontend": "./libs/@brtmvdl/frontend/src/index.js"
      }
    }
  </script>
</head>

<body>
  <div id="app"></div>
  <script type="module" src="./index.js"></script>
</body>
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

## License

[MIT](./LICENSE)
