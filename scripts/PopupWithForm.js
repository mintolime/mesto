import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitCardAdd }) {
    super(popupSelector);
    this._submitCardAdd = submitCardAdd;
    this._form = this._popup.querySelector('.form')
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
    this_form.addEventListener('submit', (evt) => {
      evt.preventDefault(),
        this._submitCardAdd(this._getInputValues())
    });
    super.setEventListeners();
  }
}
