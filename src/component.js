import { Frontend } from './frontend.js'

export class nComponent extends Frontend {
  children = {}

  getName() {
    return 'component'
  }
}
