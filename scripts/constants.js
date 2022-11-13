const popup = document.querySelector('.popup');
const cardContainer = document.querySelector('.cards__list');
const popupCard = document.querySelector('.popup_add-card');
const popupProfile = document.querySelector('.popup_edit-profile');
const popupForm = document.querySelector('.form');
//BUTTON
const openPopupBtn = document.querySelector('.button_type_edit');
const addPopupBtn = document.querySelector('.button_type_add');
const closePopupBtn = document.querySelector('.button_type_close');
const deleteCardBtn = document.querySelector('.button_type_close');
const likeBtn = document.querySelector('.button_type_like');
//PROFILE
const profileName = document.querySelector('.profile__name'); 
const formInputName = document.querySelector('.form__input_text_name'); 
const profileAboutUser = document.querySelector('.profile__info'); 
const formAboutUser = document.querySelector('.form__input_text_about');
//CARD
const cardTemplate = document.querySelector('#card-template').content;
const cardInputName = document.querySelector('#nameCard');
const cardImglink = document.querySelector('#linkCard');

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