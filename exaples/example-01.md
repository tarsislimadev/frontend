
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
