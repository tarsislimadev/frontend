
```html
<!-- index.html -->

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>brtmvdl</title>
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
  <script type="module">
    import { HTML } from '@brtmvdl/frontend'
    import { Page } from './index.js'
    HTML.fromElement(document.body).setStyle('margin', '0')
    HTML.fromId('app').append(new Page())
  </script>
</body>
</html>
```

```js
// index.js

import { HTML } from '@brtmvdl/frontend'

export class Page extends HTML {
  onCreate() {
    super.onCreate()
    this.setText('page')
  }
}
```
