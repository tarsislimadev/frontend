import { HTML, nInput, nLabel } from './index.js'

export class nInputGroup extends HTML {
  children = {
    label: new nLabel(),
    input: new nInput(),
    error: new HTML(),
  }

  getName() {
    return 'input-group'
  }

  onCreate() {
    super.onCreate()
    this.append(this.getLabel())
    this.append(this.getInput())
    this.append(this.getError())
  }

  getLabel() {
    return this.children.label
  }

  getInput() {
    return this.children.input
  }

  getError() {
    return this.children.error
  }

  setError(error = '') {
    this.children.error.setText(error)
    this.children.input.setStyle('box-shadow', '0rem 0rem 0rem calc(1rem / 8) red')
    return this
  }

  clearError() {
    this.children.error.setText('')
    this.children.input.setStyle('box-shadow', 'none')
    return this
  }

  getValue() {
    return this.children.input.getValue()
  }
}
