import '../pages/index.css';
import Section from './Section.js'
import Card from './Card.js'
import FormValidator from './FormValidator.js'
import { initialCards } from './data-card.js'
import { validationConfig } from './data-validation.js'
import {
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
} from './constants.js'
import Popup from './Popup.js'

//универсальные функции
function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupByEsc);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupByEsc);
};

//закрытие попапа по кнопке Esc
function closePopupByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

//функции ввода
function fillPopupProfileInputs() {
  formInputName.value = profileName.textContent;
  formAboutUser.value = profileAboutUser.textContent;
};

function changeTextProfile(evt) {
  evt.preventDefault();
  profileName.textContent = formInputName.value;
  profileAboutUser.textContent = formAboutUser.value;
  closePopup(popupProfile);
};

//закрытие попапов
// popups.forEach((popup) => {
//   popup.addEventListener('click', function (evt) {
//     if (evt.target.classList.contains('popup') || evt.target.classList.contains('button_type_close')) {
//       closePopup(popup);
//     }
//   });
// });

// создание карточек в разметке
// function createCard(item, templateSelector, imgFigure, infoFigure, openImg) {
//   const card = new Card(item, templateSelector, imgFigure, infoFigure, openImg);
//   const cardElement = card.generateCard();

//   cardContainer.prepend(cardElement);
// };

//открытие попапа с картинкой
function openImg(name, img) {
  openPopup(popupImg);
  popupImg.classList.add('popup__container_image-preview')//затемнения фона попапа с картинкой
  imgFigure.src = img;
  imgFigure.alt = name;
  infoFigure.textContent = name;
};

// const newpopupCard = new Popup()

//добавление карточки
const submitCardAdd = (evt) => {
  evt.preventDefault();
  // createCard({
  //   name: cardInputName.value,
  //   link: cardImgLink.value
  // },
  //   '#card-template',
  //   imgFigure,
  //   infoFigure,
  //   openImg);
  formCard.reset()
  closePopup(popupCard)
};

//класс вставки разметки класса Card
const sectionCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card-template', imgFigure, infoFigure, openImg);
    const cardElement = card.generateCard();
    sectionCard.addItem(cardElement)
  }
}, cardContainer);
sectionCard.renderItems();

//создания экзепмляра форм
const validationFormPopupEdit = new FormValidator(formProfile, validationConfig);
validationFormPopupEdit.enableValidation();

const validationFormPopupAdd = new FormValidator(formCard, validationConfig);
validationFormPopupAdd.enableValidation();

//отрисовка всех карточек
//initialCards.forEach((item) => { createCard(item, '#card-template', imgFigure, infoFigure, openImg) });

//обработчики событий
popupProfileAddButton.addEventListener('click', () => {
  openPopup(popupCard);
  validationFormPopupAdd.disableSubmitButton(popupProfileSaveButton);
  validationFormPopupAdd.resetErrorForm();
});

popupProfileOpenButton.addEventListener('click', () => {
  openPopup(popupProfile);
  validationFormPopupEdit.disableSubmitButton(popupProfileSaveButton);
  validationFormPopupEdit.resetErrorForm();
  fillPopupProfileInputs();
});

formProfile.addEventListener('submit', changeTextProfile);
formCard.addEventListener("submit", submitCardAdd);
