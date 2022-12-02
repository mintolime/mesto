const enableValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_save',
  inactiveButtonClass: 'button_type_disable',
  inputErrorClass: 'form__input-error',
};

//обьявление новых переменный и присваивание значений на основе значений свойств объекта
const { formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass } = enableValidation;

//показываем ошибку
const showInputError = (formElement, inputElement, errorMessage, enableValidation) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  //inputElement.style.borderBottom = '1px #FF0000 solid'; //добавление нижней рамки при ошибке, через CSS пропадают буквы
  errorElement.textContent = errorMessage;
};

//скрываем ошибку
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
};

//проверяем валидность импута и форм, далее выводим ошибку
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

//функция отключения кнопки, присваивание ей классов
function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//функция валидности
const isValid = () => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

isValid(enableValidation);
