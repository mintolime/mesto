export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  addItem(element) {
    this._container.append(element)
  }

  // clear() {
  //   this._container.innerHTML = '';
  // }
  renderer() {
    this._initialArray.forEach((item) => {

    });
  }
}

