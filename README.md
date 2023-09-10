# @brtmvdl/frontend

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

import { Frontend, nInput, nButton } from '@brtmvdl/frontend'

const app = Frontend.fromId('app')

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
