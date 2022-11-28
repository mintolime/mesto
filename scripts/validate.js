

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
// const formElement = document.querySelector('.form');
// const formInput = formElement.querySelector('.form__input');

// // Выбираем элемент ошибки на основе уникального класса
// const formError = formElement.querySelector('form__input-error');

const form = document.querySelector('.form');
const formInput = form.querySelector('.form__input');
const formError = form.querySelector(`.${formInput.id}-error`);

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  inputElement.style.borderBottom = '1px #FF0000 solid'; //изменение цвета валидации
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', function () {
  checkInputValidity(form, formInput);
});

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  });
};

const toggleButton = (inputList, buttonElement) =>{
  if (hasInvalidInput(inputList)){
    buttonElement.classList.add('button_disabled')
  }
else{
  buttonElement.classList.remove('button_disabled')
}
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};


const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();

    });
    setEventListeners(formElement);
  });
};
enableValidation()
