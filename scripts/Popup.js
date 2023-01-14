export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._btnClose = this._popup.querySelector('.button_type_close')
    
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

  setEventListeners() {
  //   this._popup.addEventListener('click', function (evt) {
  //   if (evt.target.classList.contains('popup') || evt.target.classList.contains('button_type_close')) {
  //     this.close()
  //   }
  // });
    this._popup.addEventListener('click',(evt) => this.close(evt));
    this._btnClose.addEventListener('click',(evt) => this.close(evt));
  }
}
