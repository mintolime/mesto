import '../pages/index.css'
import Api from '../components/Api'
import PopupWithConfirmation from '../components/PopupWithConfirmation'
import UserInfo from '../components/UserInfo.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import { validationConfig } from '../utils/data-validation.js'
import {
  formProfile,
  formInputName,
  formAboutUser,
  formAvatar,
  formCard,
  popupProfileEditButton,
  popupProfileAddButton,
  popupAvatarBtn,
} from '../utils/constants.js'

//функции создания карточки с использованием класса Сard
const createCard = (item) => {
  const cardNew = new Card({
    data: item,
    userId: userId,
    templateSelector: '#card-template',
    handleCardClick: (name, img) => { popupNewCardImage.open(name, img) },

    handleCardDelete: (cardId) => {
      popupConfirmDlt.open()
      popupConfirmDlt.handleDelete(() => {
        apiData.deleteCard(cardId)
          .then(() => { cardNew.deleteCard() })
          .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
          popupConfirmDlt.close()
      })
    },

    handleCardLike: (cardId) => {
      apiData.addLike(cardId)
         .then((data) => { cardNew.setLikes(data.likes) })
        .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
    },

    handleCardDislike: (cardId) => {
      apiData.deleteLike(cardId)
        .then((data) => { cardNew.setLikes(data.likes) })
        .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
    },
  })
  return cardNew.generateCard();
};

//получение апи с сервера
const apiData = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    authorization: '54338beb-6a3f-46f8-bd6b-cdb1bf1c9692'
  }
});

const sectionCard = new Section({
  renderer: (item) => { sectionCard.addItemAppend(createCard(item)) }
}, { containerSelector: ('.cards__list') });

//работает
const popupNewFormCard = new PopupWithForm({
  popupSelector: ('.popup_add-card'),
  submitCallback: (cardData) => {
    popupNewFormCard.renderLoading(true)
    apiData.createCards(cardData)
      .then((cardData) => {
        sectionCard.addItemPrepend(createCard(cardData))
        popupNewFormCard.close()
      })
      .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
      .finally(() => popupNewFormCard.renderLoading(false))
  }
});

const popupNewFormAvatar = new PopupWithForm({
  popupSelector: ('.popup_avatar'),
  submitCallback: (data) => {
    popupNewFormAvatar.renderLoading(true)
    apiData.changeAvatar(data)
      .then((data) => {
        userInfo.setAvatarLink(data)
        popupNewFormAvatar.close()
      })
      .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
      .finally(() => popupNewFormAvatar.renderLoading(false))
  }
});

//получение класса UserInfo
const userInfo = new UserInfo({
  nameSelector: ('.profile__name'),
  aboutSelector: ('.profile__info'),
  avatarSelector: ('.profile__photo'),
});

//получение класса PopupWithImage с попапом картинки
const popupNewCardImage = new PopupWithImage({ popupSelector: ('.popup_image') })
const popupConfirmDlt = new PopupWithConfirmation({ popupSelector: ('.popup_confirm') })

const popupNewFormProfile = new PopupWithForm({
  popupSelector: ('.popup_edit-profile'),
  submitCallback: (data) => {
    popupNewFormProfile.renderLoading(true);
    apiData.updateUserInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupNewFormProfile.close();
      })
    .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
    .finally(() => { popupNewFormProfile.renderLoading(false)})
  }
});

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
  popupNewFormProfile.open();
  const profileInfo = userInfo.getUserInfo();
  formInputName.value = profileInfo.nameUser;
  formAboutUser.value = profileInfo.aboutUser;
  validFormPopupEdit.disableSubmitButton();
  validFormPopupEdit.resetErrorsForm();
});

popupAvatarBtn.addEventListener('click', () => {
  popupNewFormAvatar.open();
  validFormPopupAvatar.disableSubmitButton();
  validFormPopupAvatar.resetErrorsForm();
});

//вызовы всех функций
popupNewFormCard.setEventListeners();
popupNewFormAvatar.setEventListeners()
popupConfirmDlt.setEventListeners();
popupNewCardImage.setEventListeners();
popupNewFormProfile.setEventListeners();
validFormPopupAvatar.enableValidation();
validFormPopupAdd.enableValidation();
validFormPopupEdit.enableValidation();

//получения промиссов для отображения данных на странице
let userId;

apiData.getAllData()
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    userInfo.setAvatarLink(userData);
    userId = userData._id;
    sectionCard.renderItems(initialCards)
  })
  .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))


