

// const enableValidation = {
//   formSelector: '.form',
//   inputSelector: '.form__input',
//   submitButtonSelector: '.button_type_save',
//   inactiveButtonClass: 'button_disabled',
//   inputErrorClass: 'form__input-error',
//   errorClass: 'form__input-error_active',
// };



// const enableValidation = {
//   formSelector: ".popup__form",
//   inputSelector: ".popup__text_input",
//   submitButtonSelector: ".popup__submit",
//   inactiveButtonClass: ".popup__submit_disabled",
//   inputErrorClass: ".popup__text_invalid",
//   errorClass: "`.${inputElement.id}-error`",
//   errorInput: ".popup__text-input"
// };
const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');

// Выбираем элемент ошибки на основе уникального класса
const formError = formElement.querySelector(`.${formInput.id}-error`);
console.log(formError)
const showInputError = (element) => {
  element.classList.add('form__input_type_error');
  // Показываем сообщение об ошибке
  formError.classList.add('form__input-error_active');
};

const hideInputError = (element) => {
  element.classList.remove('form__input_type_error');
  // Скрываем сообщение об ошибке
  formError.classList.remove('form__input-error_active');
};
