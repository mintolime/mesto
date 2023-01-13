//спасибо за ревью
//POPUP
const popups = document.querySelectorAll('.popup');
const popupCard = document.querySelector('.popup_add-card');
const popupProfile = document.querySelector('.popup_edit-profile');
const popupImg = document.querySelector('.popup_image');
//PROFILE
const formProfile = document.querySelector('[name="formProfile"]');
const profileName = document.querySelector('.profile__name');
const formInputName = document.querySelector('.form__input_text_name');
const profileAboutUser = document.querySelector('.profile__info');
const formAboutUser = document.querySelector('.form__input_text_about');
//CARD
const cardContainer = document.querySelector('.cards__list');
const formCard = document.querySelector('[name="formCard"]');
const cardInputName = document.querySelector('[name="nameCard"]');
const cardImgLink = document.querySelector('[name="linkCard"]');
const imgFigure = document.querySelector('.figure__image');
const infoFigure = document.querySelector('.figure__info');
//BUTTON
const popupProfileOpenButton = document.querySelector('.button_type_edit');
const popupProfileAddButton = document.querySelector('.button_type_add');
const popupProfileSaveButton = formCard.querySelector('.button_type_save');

export {
  popups,
  popupCard,
  popupProfile,
  popupImg,
  formProfile,
  profileName,
  formInputName,
  profileAboutUser,
  formAboutUser,
  cardContainer,
  formCard,
  cardInputName,
  cardImgLink,
  imgFigure,
  infoFigure,
  popupProfileOpenButton,
  popupProfileAddButton,
  popupProfileSaveButton,
};
