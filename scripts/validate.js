const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_save',
  inactiveButtonClass: 'button_type_disable',
  inputErrorClass: 'form__input-error_active',
  errorClass: 'form__input-error',
};

//показываем ошибку
// const showInputError = (formElement, inputElement, errorMessage, config) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(config.inputErrorClass);
//   errorElement.classList.add(config.errorClass);
//   errorElement.textContent = errorMessage;
// };

// //скрываем ошибку
// const hideInputError = (formElement, inputElement, config) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(config.inputErrorClass);
//   errorElement.textContent = '';
// };

//проверяем валидность импута и форм, далее выводим ошибку
// const checkInputValidity = (formElement, inputElement, config) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, config);
//   } else {
//     hideInputError(formElement, inputElement, config);
//   }
// };

//валидность импутов для функционала кнопки
// function hasInvalidInput(inputList) {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

//функция отключения кнопки, присваивание ей классов
// function toggleButtonState(inputList, buttonElement, config) {
//   if (hasInvalidInput(inputList)) {
//     disableSubmitButton(buttonElement, config.inactiveButtonClass);
//   } else {
//     enableSubmitButton(buttonElement, config.inactiveButtonClass);
//   }
// };

//функции состояния кнопок
// function disableSubmitButton(buttonElement, inactiveButtonClass) {
//   buttonElement.disabled = true;
//   buttonElement.classList.add(inactiveButtonClass);
// };

// function enableSubmitButton(buttonElement, inactiveButtonClass) {
//   buttonElement.disabled = false;
//   buttonElement.classList.remove(inactiveButtonClass);
// };

//cброс ошибки в форме
function resetErrorForm(popupElement) {
  const inputList = Array.from(popupElement.querySelectorAll('.form__input'));
  inputList.forEach((inputElement) => {
    hideInputError(popupElement, inputElement, { inputErrorClass: 'form__input-error' });
  });
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

//функция валидности
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};

enableValidation(validationConfig);
