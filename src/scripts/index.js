<<<<<<< HEAD:src/scripts/index.js
import '../pages/index.css';
=======
import UserInfo from './UserInfo.js'
>>>>>>> dev-new-classes:scripts/index.js
import Section from './Section.js'
import PopupWithImage from './PopupWithImage.js'
import PopupWithForm from './PopupWithForm.js'
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
<<<<<<< HEAD:src/scripts/index.js
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
=======
>>>>>>> dev-new-classes:scripts/index.js

//функции создания карточки с использованием класса Сard 
function createCard(item) {
  const cardNew = new Card(item, '#card-template', handleCardClick);
  return cardNew.generateCard();
}
//открытие попапа с картинкой
function handleCardClick(name, img) {
  popupnewCardImage.open(name, img);
};

<<<<<<< HEAD:src/scripts/index.js
// const newpopupCard = new Popup()
=======
//получение класса UserInfo
const userInfo = new UserInfo(profileName, profileAboutUser);
//получение класса PopupWithImage с попапом картинки 
const popupnewCardImage = new PopupWithImage(popupImg)
popupnewCardImage.setEventListeners();
>>>>>>> dev-new-classes:scripts/index.js

//создание карточек
const popupNewFormCard = new PopupWithForm({
  popupSelector: popupCard,
  submitCardAdd: () => {
    const cardItems = { name: cardInputName.value, link: cardImgLink.value };
    sectionCard.addItem(createCard(cardItems))
    popupNewFormCard.close()
  }
}
)
popupNewFormCard.setEventListeners()

//создание формы 
const popupNewFormProfile = new PopupWithForm({
  popupSelector: popupProfile,
  submitCardAdd: (formValues) => {
    userInfo.setUserInfo(formValues);
    popupNewFormProfile.close();
  }
}
)
popupNewFormProfile.setEventListeners()

//класс вставки разметки класса Card
const sectionCard = new Section({
  items: initialCards,
  renderer: (item) => {
    sectionCard.addItem(createCard(item))
  }
}, cardContainer);

sectionCard.renderItems();

//создания экзепмляра форм
const validationFormPopupEdit = new FormValidator(formProfile, validationConfig);
validationFormPopupEdit.enableValidation();

const validationFormPopupAdd = new FormValidator(formCard, validationConfig);
validationFormPopupAdd.enableValidation();

//обработчики событий
popupProfileAddButton.addEventListener('click', () => {
  popupNewFormCard.open();
  validationFormPopupAdd.disableSubmitButton(popupProfileSaveButton);
  validationFormPopupAdd.resetErrorForm();
});

popupProfileOpenButton.addEventListener('click', () => {
  popupNewFormProfile.open();
  validationFormPopupEdit.disableSubmitButton(popupProfileSaveButton);
  validationFormPopupEdit.resetErrorForm();
});
