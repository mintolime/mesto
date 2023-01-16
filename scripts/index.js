import UserInfo from './UserInfo.js'
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

//функции создания карточки с использованием класса Сard 
function createCard(item) {
 const cardNew = new Card(item, '#card-template', handleCardClick);
   return cardNew.generateCard();
}
//открытие попапа с картинкой
function handleCardClick(name, img) {
  popupnewCardImage.open(name, img);
};

const userInfo = new UserInfo(profileName, profileAboutUser);
const popupnewCardImage = new PopupWithImage(popupImg)
popupnewCardImage.setEventListeners();

//создание карточек
const popupNewFormCard = new PopupWithForm({
  popupSelector: popupCard,
  submitCardAdd: (formValues) => {
    const cardItems = { name: cardInputName.value, link: cardImgLink.value };
    sectionCard.addItem(createCard(cardItems))
    console.log(cardItems)
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
    // const card = new Card(item, '#card-template', handleCardClick);
    // const cardElement = card.generateCard();
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


// formProfile.addEventListener('submit', changeTextProfile);
// formCard.addEventListener("submit", submitCardAdd);
