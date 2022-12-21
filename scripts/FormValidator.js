class FormValidator {
  constructor(validationConfig, formElement) {
    this._validationConfig = validationConfig;
    this._formElement = formElement;
    this._inputList = Array.from(this_.formElement.querySelectorAll(validationConfig.inputSelector));
    this._buttonElement = this._formElement.querySelector(config.validationConfig.submitButtonSelector);
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  }

_showInputError(inputElement, errorMessage)  { 
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.classList.add(validationConfig.errorClass);
  errorElement.textContent = errorMessage;
};
_hideInputError(inputElement){
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.textContent = '';
};

_checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputElement);
  }
};

_hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
disableSubmitButton() {
  buttonElement.disabled = true;
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
};

enableSubmitButton() {
  buttonElement.disabled = false;
  buttonElement.classList.remove(validationConfig.inactiveButtonClass);
};
_toggleButtonState(inputList) {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(this._buttonElement, validationConfig.inactiveButtonClass);
  } else {
    enableSubmitButton(this_.buttonElement, validationConfig.inactiveButtonClass);
  }
};

_setEventListeners() {
  this.toggleButtonState();
  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
  });
}; 
}
// const validationFormAddCard = new FormValidator(settings, formAdd)
