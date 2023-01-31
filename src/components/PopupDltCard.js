import Popup from "./Popup.js";

export default class PopupDltCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitBtnDlt = this._popupSelector.querySelector('.button_type_save_confirm');
  }

  _checkDelete() {
    console.log(this._submitBtnDlt)
  }

  handleDelete(callback) {
    this._handleDelete = callback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitBtnDlt.addEventListener('click', () => {
      super.close()
      this._handleDelete();
    });
  }

}
