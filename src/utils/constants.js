//PROFILE
const formProfile = document.querySelector('[name="formProfile"]');
const formAvatar = document.querySelector('[name="formAvatar"]');
const profileName = document.querySelector('.profile__name');
const profileAboutUser = document.querySelector('.profile__info');
const profilePhotoUser = document.querySelector('.profile__photo');
const formInputName = document.querySelector('.form__input_text_name');
const formAboutUser = document.querySelector('.form__input_text_about');
//CARD
const formCard = document.querySelector('[name="formCard"]');
//BUTTON
const popupProfileEditButton = document.querySelector('.button_type_edit');
const popupProfileAddButton = document.querySelector('.button_type_add');
const popupAvatarBtn = document.querySelector('.button_type_avatar_edit');

export {
  formProfile,
  formInputName,
  formAboutUser,
  formAvatar,
  profileName,
  profileAboutUser,
  profilePhotoUser,
  formCard,
  popupProfileEditButton,
  popupProfileAddButton,
  popupAvatarBtn
};
