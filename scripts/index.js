import Section from './Section.js'
import Popup from './Popup.js'
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


//универсальные функции
// function openPopup(popup) {
  // popup.classList.add('popup_opened')
  // document.addEventListener('keydown', closePopupByEsc);
// };

// function closePopup(popup) {
//   popup.classList.remove('popup_opened')
//   document.removeEventListener('keydown', closePopupByEsc);
// };

//закрытие попапа по кнопке Esc
// function closePopupByEsc(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// };

//функции ввода
// function fillPopupProfileInputs() {
//   formInputName.value = profileName.textContent;
//   formAboutUser.value = profileAboutUser.textContent;
// };



//закрытие попапов
// popups.forEach((popup) => {
//   popup.addEventListener('click', function (evt) {
//     if (evt.target.classList.contains('popup') || evt.target.classList.contains('button_type_close')) {
//       // closePopup(popup);
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
function handleCardClick(name, img) {
   popupnewCardImage.open(name,img);
};

// const popupnewCard = new Popup(popupCard)
// popupnewCard.setEventListeners()
// const popupnewProfile = new Popup(popupProfile)
// popupnewProfile.setEventListeners()
const popupnewCardImage = new PopupWithImage(popupImg)
popupnewCardImage.setEventListeners();

// const  popupNewFormCard = new PopupWithForm({popupSelector:formCard,
// submitCardAdd: (newValies) =>{
//    const cardElement = { name: newValies.cardInputName, link: newValies.cardImgLink };
//    sectionCard.addItem(cardElement)
//    popupNewFormCard.close()
// }}
// )
// popupNewFormCard.setEventListeners()

const  popupNewFormProfile = new PopupWithForm({popupSelector: popupProfile,
submitCardAdd: (newValies) =>{
   userInfo.setUserInfo(newValies);
   popupNewFormProfile.close();
}}
)
popupNewFormProfile.setEventListeners()

// function changeTextProfile(evt) {
//   evt.preventDefault();
//   profileName.textContent = formInputName.value;
//   profileAboutUser.textContent = formAboutUser.value;
//   popupnewProfile.close();
// };

//добавление карточки
// const submitCardAdd = (evt) => {
//   evt.preventDefault();
//   sectionCard.addItem(cardInputName.value,cardImgLink.value)
//   // createCard({
//   //   name: cardInputName.value,
//   //   link: cardImgLink.value
//   // },
//   //   '#card-template',
//   //   imgFigure,
//   //   infoFigure,
//   //   openImg);
//   // formCard.reset()
//   popupnewCard.close();
// };



//класс вставки разметки класса Card
const sectionCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card-template',handleCardClick);
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



//обработчики событий
popupProfileAddButton.addEventListener('click', () => {
  popupnewCard.open();
  validationFormPopupAdd.disableSubmitButton(popupProfileSaveButton);
  validationFormPopupAdd.resetErrorForm();
});

popupProfileOpenButton.addEventListener('click', () => {
  popupNewFormProfile.open();
  validationFormPopupEdit.disableSubmitButton(popupProfileSaveButton);
  validationFormPopupEdit.resetErrorForm();
});


// formProfile.addEventListener('submit', changeTextProfile);
// formCard.addEventListener("submit", submitCardAdd);
