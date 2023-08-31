# @brtmvdl/frontend

## install

```bash
npm i @brtmvdl/frontend
```

## hot to use

```html
<!-- index.html -->

<div id="app"></div>

<script src="./index.js" type="module"></script>
```

```js
// index.js

const { Frontend, nInput, nButton } = ('@brtmvdl/frontend')

const app = Frontend.fromId('app')

const input = new nInput()
app.append(input)

const button = new nButton()
button.on('click', () => {
  const value = input.getValue()
  window.alert(`value: ${value}`)
})
app.append(button)
```

## License

[MIT](./LICENSE)
