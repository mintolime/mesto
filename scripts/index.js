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



//открытие попапа с картинкой
function handleCardClick(name, img) {
   popupnewCardImage.open(name,img);
};

const userInfo = new UserInfo(profileName, profileAboutUser);
const popupnewCardImage = new PopupWithImage(popupImg)
popupnewCardImage.setEventListeners();

const  popupNewFormCard = new PopupWithForm({popupSelector:popupCard,
submitCardAdd: (newValies) =>{
   const cardElement = { name: newValies.cardInputName, link: newValies.cardImgLink };
   sectionCard.addItem(cardElement)
   popupNewFormCard.close()
}}
)
popupNewFormCard.setEventListeners()

const  popupNewFormProfile = new PopupWithForm({popupSelector: popupProfile,
submitCardAdd: (formValues) =>{
   userInfo.setUserInfo(formValues);
   console.log(formValues)
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
