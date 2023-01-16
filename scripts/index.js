import UserInfo from './UserInfo.js'
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

//функции создания карточки с использованием класса Сard 
function createCard(item) {
  const cardNew = new Card(item, '#card-template', handleCardClick);
  return cardNew.generateCard();
}
//открытие попапа с картинкой
function handleCardClick(name, img) {
  popupnewCardImage.open(name, img);
};

//получение класса UserInfo
const userInfo = new UserInfo(profileName, profileAboutUser);
//получение класса PopupWithImage с попапом картинки 
const popupnewCardImage = new PopupWithImage(popupImg)
popupnewCardImage.setEventListeners();

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
