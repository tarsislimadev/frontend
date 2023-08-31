import { Frontend } from './frontend.js'

export class nSpan extends Frontend {
  getName() {
    return 'span'
  }

  getTagName() {
    return 'span'
  }

  hasContainer() {
    return false
  }
}
