// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_save',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'form__input-error',
  errorClass: 'form__input-error_active'
});


function closeOnEsc(evt) {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
};

  formSelector.addEventListener('keydown', closeOnEsc);
