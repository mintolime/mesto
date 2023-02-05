import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupSelector.querySelector('.form[name]')
  }
  
  handleDelete(callback) {
    this._handleDelete = callback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleDelete()
    })
  };

}