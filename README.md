# @brtmvdl/frontend

[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/frontend/docker-pull.yml?label=Docker%20pull&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Ffrontend%2Factions%2Fworkflows%2Fdocker-pull.yml)](https://github.com/brtmvdl/frontend/blob/main/.github/workflows/docker-push.yml) [![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/frontend/docker-push.yml?label=Docker%20push&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Ffrontend%2Factions%2Fworkflows%2Fdocker-push.yml)](https://github.com/brtmvdl/frontend/actions/workflows/docker-push.yml) [![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/frontend/github-release.yml?label=GitHub%20release&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Ffrontend%2Factions%2Fworkflows%2Fgithub-release.yml)](https://github.com/brtmvdl/frontend/actions/workflows/github-release.yml) [![github/license](https://img.shields.io/github/license/brtmvdl/frontend)](https://img.shields.io/github/license/brtmvdl/frontend)  [![github/stars](https://img.shields.io/github/stars/brtmvdl/frontend?style=social)](https://img.shields.io/github/stars/brtmvdl/frontend?style=social)

Front-end as javascript

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
