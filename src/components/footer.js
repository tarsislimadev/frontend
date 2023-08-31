import { Frontend } from '../index.js'

export class FooterComponent extends Frontend {
  getName() {
    return 'footer'
  }

  onCreate() {
    this.setText('footer')
  }
}
