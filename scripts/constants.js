const popup = document.querySelector('.popup');
const popupCard = document.querySelector('.popup_add-card');
const popupProfile = document.querySelector('.popup_edit-profile');
const popupImg = document.querySelector('.popup_image');
const popupForm = document.querySelector('.form');

//BUTTON
const openPopupBtn = document.querySelector('.button_type_edit');
const addPopupBtn = document.querySelector('.button_type_add');
const closePopupBtn = document.querySelectorAll('.button_type_close');
const submitBtn = document.querySelectorAll('.button_type_save');
//PROFILE
const formProfile = document.querySelector('#formProfile');
const profileName = document.querySelector('.profile__name'); 
const formInputName = document.querySelector('.form__input_text_name'); 
const profileAboutUser = document.querySelector('.profile__info'); 
const formAboutUser = document.querySelector('.form__input_text_about');
//CARD
const cardTemplate = document.querySelector('#card-template').content;
const cardContainer = document.querySelector('.cards__list');
const cardImg = document.querySelector('.cards__image');
const formCard = document.querySelector('#formCard');
const cardInputName = document.querySelector('#nameCard');
const cardImgLink = document.querySelector('#linkCard');
const imgFigure = document.querySelector('.figure__image');
const infoFigure = document.querySelector('.figure__info');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 