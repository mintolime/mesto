const popup = document.querySelector('.popup'); 
const popupCard = document.querySelector('.popup_add-card');
const popupProfile = document.querySelector('.popup_edit-profile');
const popupForm = document.querySelector('.form');
//BUTTON
const openPopupBtn = document.querySelector('.button_type_edit');
const addPopupBtn = document.querySelector('.button_type_add');
const closePopupBtn = document.querySelector('.button_type_close');

const likeBtn = document.querySelector('.button_type_like');
//PROFILE
const profileName = document.querySelector('.profile__name');
const formInputName = document.querySelector('.form__input_text_name');
const profileAboutUser = document.querySelector('.form__input_text_about');
const formAboutUser = document.querySelector('.form__input_text_about');
//CARD
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card__list');
const cardInputName = document.querySelector('#nameCard');
const cardImglink = document.querySelector('#linkCard');