import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitCallback }) {
    super({popupSelector});
    this._submitCallback = submitCallback;
    this._inputList = this._popupSelector.querySelectorAll('.form__input');
    this._form = this._popupSelector.querySelector('.form[name]')
      this._submitBtn = this._popupForm.querySelector('.form__submit');
    this._submitBtnText = this._submitBtn.textContent;
  }

  _getInputValues() {
    // создаём пустой объект
    const formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => formValues[input.name] = input.value);
    // возвращаем объект значений
    return formValues;
  }

  close() {
    this._form.reset()
    super.close()
  }
   
  renderLoading(isLoading) {
    if (isLoading) {
      this._submitBtn.textContent = 'Сохранение...'
    } else {
      this._submitBtn.textContent = this._submitBtnText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault(),
      this._submitCallback(this._getInputValues())
    });
  }
}
