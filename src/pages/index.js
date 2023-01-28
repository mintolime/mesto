import '../pages/index.css'
import Api from '../components/Api'
import Popup from '../components/Popup'
import UserInfo from '../components/UserInfo.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
// import { initialCards } from '../utils/data-card.js'
import { validationConfig } from '../utils/data-validation.js'
import {
  formProfile,
  formInputName,
  formAboutUser,
  profileName,
  profileAboutUser,
  formAvatar,
  formCard,
  popupProfileEditButton,
  popupProfileAddButton,
  popupCardDeleteBtn,
  popupAvatarBtn
} from '../utils/constants.js'

//функции создания карточки с использованием класса Сard
function createCard(item) {
  const cardNew = new Card(item, '#card-template', handleCardClick);
  return cardNew.generateCard();
}
//открытие попапа с картинкой
function handleCardClick(name, img) {
  popupNewCardImage.open(name, img);
};


//получение апи с сервера
const ariCardData = new Api({
  url:'https://mesto.nomoreparties.co/v1/cohort-58',
  headers:{
    'Content-Type':'application/json',
    authorization: '54338beb-6a3f-46f8-bd6b-cdb1bf1c9692'
    }
})

ariCardData.getAllCards().then((res) => sectionCard.renderItems(res))

//получение класса UserInfo
const userInfo = new UserInfo(profileName, profileAboutUser);
//получение класса PopupWithImage с попапом картинки
const popupNewCardImage = new PopupWithImage({ popupSelector: ('.popup_image') })
const popupConfirmDlt = new Popup({ popupSelector: ('.popup_confirm') })
const popupAvatar = new Popup({ popupSelector: ('.popup_avatar') })

//создание экземляра карточек
const popupNewFormCard = new PopupWithForm({
  popupSelector: ('.popup_add-card'),
  submitCallback: ({ nameCard, linkCard }) => {
    const cardItem = { name: nameCard, link: linkCard };
    sectionCard.addItem(createCard(cardItem))
    popupNewFormCard.close()
  }
});



//создание экземляра  формы
const popupNewFormProfile = new PopupWithForm({
  popupSelector: ('.popup_edit-profile'),
  submitCallback: (formValues) => {
    userInfo.setUserInfo(formValues);
    popupNewFormProfile.close();
  }
});

//класс вставки разметки класса Card
// const sectionCard = new Section({
//   items: data,
//   renderer: (item) => {
//     sectionCard.addItem(createCard(item))
//   }
// }, { containerSelector: ('.cards__list') });

//создания экзепмляра всех  форм и их валидация
const validFormPopupEdit = new FormValidator(formProfile, validationConfig);
const validFormPopupAdd = new FormValidator(formCard, validationConfig);
const validFormPopupAvatar = new FormValidator(formAvatar, validationConfig);


//обработчики событий
popupProfileAddButton.addEventListener('click', () => {
  popupNewFormCard.open();
  validFormPopupAdd.disableSubmitButton();
  validFormPopupAdd.resetErrorsForm();
});

popupProfileEditButton.addEventListener('click', () => {
  const profileInfo = userInfo.getUserInfo();
  formInputName.value = profileInfo.nameUser;
  formAboutUser.value = profileInfo.aboutUser;
  popupNewFormProfile.open();
  validFormPopupEdit.disableSubmitButton();
  validFormPopupEdit.resetErrorsForm();
});

popupAvatarBtn.addEventListener('click', () => {
  popupAvatar.open();
  validFormPopupAvatar.disableSubmitButton();
  validFormPopupAvatar.resetErrorsForm();
});

//вызовы всех функций
sectionCard.renderItems();
popupAvatar.setEventListeners();
popupConfirmDlt.setEventListeners();
popupNewCardImage.setEventListeners();
popupNewFormProfile.setEventListeners();
popupNewFormCard.setEventListeners();
validFormPopupAvatar.enableValidation();
validFormPopupAdd.enableValidation();
validFormPopupEdit.enableValidation();
