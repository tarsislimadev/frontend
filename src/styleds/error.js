import { Frontend } from '../index.js'
import * as COLORS from '../utils/colors.js'

export class nError extends Frontend {
  getName() {
    return 'error'
  }

  onCreate() {
    this.setStyles()
  }

  setStyles() {
    this.setStyle('color', COLORS.RED_1)
  }
}
