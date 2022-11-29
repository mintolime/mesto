
const enableValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_save',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'form__input-error',
  errorClass: 'form__input-error_active',
};
const { formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass } = enableValidation;
console.log(enableValidation);
//показываем ошибку
const showInputError = (formElement, inputElement, errorMessage,inputErrorClass,errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  inputElement.style.borderBottom = '1px #FF0000 solid'; //изменение цвета валидации
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

//скрываем ошибку
const hideInputError = (formElement, inputElement,inputErrorClass,errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

//проверяем валидность
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
//валидность импутов для функционала кнопки
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });

};
//функция отключения кнопки
function toggleButtonState(inputList, buttonElement,inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);

  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
};


const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement,inactiveButtonClass); //нужно ли довавлять класс как аргумент?

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement,inactiveButtonClass);
    });
  });
};

const isValid = () => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

isValid(enableValidation);
