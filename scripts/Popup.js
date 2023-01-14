export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;

  }

  open() {
    this._popup.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose);
  }
  close() {
    this._popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close()
    }
  }

  fix(){
    console.log('fix')
  }
  _setEventListeners() {

  }
}
