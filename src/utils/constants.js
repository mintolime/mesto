//PROFILE
const formProfile = document.querySelector('[name="formProfile"]');
const profileName = document.querySelector('.profile__name');
const profileAboutUser = document.querySelector('.profile__info');
const formInputName = document.querySelector('.form__input_text_name');
const formAboutUser = document.querySelector('.form__input_text_about');
//CARD
const formCard = document.querySelector('[name="formCard"]');
//BUTTON
const popupProfileEditButton = document.querySelector('.button_type_edit');
const popupProfileAddButton = document.querySelector('.button_type_add');

export {
  formProfile,
  formInputName,
  formAboutUser,
  profileName,
  profileAboutUser,
  formCard,
  popupProfileEditButton,
  popupProfileAddButton,
};
