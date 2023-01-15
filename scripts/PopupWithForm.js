import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitCardAdd }) {
    super(popupSelector);
    this._submitCardAdd = submitCardAdd;
    this._inputList = this._popup.querySelectorAll('.form__input');
    this._form = this._popup.querySelector('form[name]')
  }

  _getInputValues() {
    this._newValies = {}
    this._inputList.forEach(inputElement => {
      this._newValues[inputElement.name] = inputElement.value
    });
    return this._newValies
  }

  close() {
    this._form.reset()
    super.close()
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault(),
        this._submitCardAdd(this._getInputValues())
    });
  }
}
