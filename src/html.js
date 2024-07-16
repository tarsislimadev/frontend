
export class HTML extends EventTarget {

  element = document.createElement(this.getTagName())
  container = document.createElement('div')

  constructor() {
    super()
    this.appendClass(`el-${this.getName()}`)
    this.appendContainerClass(`ct-${this.getName()}`)
  }

  onCreate() { }

  static fromElement(el = document.createElement('div')) {
    const html = new HTML()
    html.element = el
    return html
  }

  static fromId(id) {
    return HTML.fromElement(document.getElementById(id))
  }

  // element and container

  getName() {
    return 'element'
  }

  getTagName() {
    return 'div'
  }

  getContainerName() {
    return 'div'
  }

  hasContainer() {
    return true
  }

  // class

  appendClass(value = '') {
    this.element.classList.add(value)
    return this
  }

  appendContainerClass(value = '') {
    this.container.classList.add(value)
    return this
  }

  removeClass(value = '') {
    this.element.classList.remove(value)
    return this
  }

  toggleClass(value = '') {
    return this.element.classList.contains(value)
      ? this.removeClass(value)
      : this.appendClass(value)
  }

  setId(value = '') {
    this.element.id = value
    return this
  }

  // style

  setStyle(key, value = '') {
    this.element.style[key] = value
    return this
  }

  getStyle(key, def = '') {
    return this.element.style[key] || def
  }

  setContainerStyle(key, value = '') {
    this.container.style[key] = value
    return this
  }

  getContainerStyle(key) {
    return this.container.style[key]
  }

  // attr

  setAttr(key, value = '') {
    this.element.setAttribute(key, value)
    return this
  }

  getAttr(key, def = '') {
    return this.element.getAttribute(key) || def
  }

  // text

  setText(value = '') {
    this.element.innerText = value
    return this
  }

  getText(def = null) {
    return this.element.innerText || def
  }
  // dataset

  setData(key, value = '') {
    this.element.dataset[key] = value
    return this
  }

  getData(key, def = '') {
    return this.element.dataset[key] || def
  }

  clear() {
    while (this.element.children.length > 0) {
      this.element.children.item(0).remove()
    }

    return this
  }

  append(el = new HTML()) {
    el.onCreate()
    this.element.append(el.render())
    return this
  }

  prepend(el = new HTML()) {
    el.onCreate()
    this.element.prepend(el.render())
    return this
  }

  render() {
    if (this.hasContainer()) {
      this.container.append(this.element)
      return this.container
    }

    return this.element
  }
}
