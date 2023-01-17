//POPUP
const popupCard = document.querySelector('.popup_add-card');
const popupProfile = document.querySelector('.popup_edit-profile');
const popupImg = document.querySelector('.popup_image');
//PROFILE
const formProfile = document.querySelector('[name="formProfile"]');
const profileName = document.querySelector('.profile__name');
const profileAboutUser = document.querySelector('.profile__info');
//CARD
const cardContainer = document.querySelector('.cards__list');
const formCard = document.querySelector('[name="formCard"]');
const cardInputName = document.querySelector('[name="nameCard"]');
const cardImgLink = document.querySelector('[name="linkCard"]');
//BUTTON
const popupProfileOpenButton = document.querySelector('.button_type_edit');
const popupProfileAddButton = document.querySelector('.button_type_add');
const popupProfileSaveButton = formCard.querySelector('.button_type_save');

export {
  popupCard,
  popupProfile,
  popupImg,
  formProfile,
  profileName,
  profileAboutUser,
  cardContainer,
  formCard,
  cardInputName,
  cardImgLink,
  popupProfileOpenButton,
  popupProfileAddButton,
  popupProfileSaveButton,
};
