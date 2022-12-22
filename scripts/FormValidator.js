
export default class FormValidator {
  constructor(formElement,config) {
    this._config = config;
    this._formElement = formElement;
  }

  //показываем ошибку
  _showInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    this._errorElement.classList.add(this._config.errorClass);
    this._errorElement.textContent = inputElement.validationMessage;
  };

  //скрываем ошибку
  _hideInputError = (inputElement) => {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    this._errorElement.textContent = '';
  };

  //проверяем валидность импута и форм, далее выводим ошибку
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  //валидность импутов для функционала кнопки
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  //функция отключения кнопки, присваивание ей классов
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  };

  //функции состояния кнопок
  _disableSubmitButton() {
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
  };

  _enableSubmitButton() {
    this._buttonElement.disabled = false;
    this._buttonElement.classList.remove(this._config.inactiveButtonClass);
  };

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };





  enableValidation() {
    this._setEventListeners();
  }
}
// _validationFormAddCard = new FormValidator(settings, formAdd)
