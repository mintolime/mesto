export default class Section {
  constructor({ renderer }, { containerSelector }) {
    // this._initialArray = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItemAppend(element) {
    this._containerSelector.append(element)
  }
   addItemPrepend(element) {
    this._containerSelector.prepend(element)
  }
  //Заметка : если параметр forEach или другой функции один и тот же, что и у функции, которая вызывается внутри, то можно не использовать промежуточную анонимную функцию
  renderItems(arr) {
    // this._initialArray.forEach(this._renderer)
    arr.forEach(this._renderer)
  }
}

