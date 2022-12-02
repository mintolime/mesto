const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_save',
  inactiveButtonClass: 'button_type_disable',
  inputErrorClass: 'form__input-error',
};

//обьявление новых переменный и присваивание значений на основе значений свойств объекта
// const { formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass } = enableValidation;

//показываем ошибку
const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  //inputElement.style.borderBottom = '1px #FF0000 solid'; //добавление нижней рамки при ошибке, через CSS пропадают буквы
  errorElement.textContent = errorMessage;
};

//скрываем ошибку
const hideInputError = (formElement, inputElement,config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
};

//проверяем валидность импута и форм, далее выводим ошибку
const checkInputValidity = (formElement, inputElement,config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage,config);
  } else {
    hideInputError(formElement, inputElement,config);
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
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement,config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement,config);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//функция валидности
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement,config);
  });
};

enableValidation(validationConfig);
