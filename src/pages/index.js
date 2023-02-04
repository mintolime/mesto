import '../pages/index.css'
import Api from '../components/Api'
import Popup from '../components/Popup'
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
  profileName,
  profileAboutUser,
  profilePhotoUser,
  formAvatar,
  formCard,
  popupProfileEditButton,
  popupProfileAddButton,
  popupAvatarBtn,
} from '../utils/constants.js'


//функции создания карточки с использованием класса Сard
function createCard(item) {
  const cardNew = new Card({
    data: item,
    userId: userId,
    templateSelector: '#card-template',
    handleCardClick: (name, img) => {
      popupNewCardImage.open(name, img);
    },
    handleCardDelete: (cardId) => {
      popupConfirmDlt.open()
      popupConfirmDlt.handleDelete(() => {
        apiData.deleteCard(cardId)
          .then(() => { cardNew.delete() })
      })
    },
    //лайк ставиться, то активного статуса нет - переделать
    handleCardLike: (cardId) => {
      console.log(cardId)
      apiData.addLike(cardId)
        .then((data) => {
          cardNew.viewLikes(data)
          // console.log(data)
          console.log('лайк')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    handleCardDislike: (cardId) => {
      apiData.deleteLike(cardId)
        .then((data) => {
          cardNew.viewLikes(data)
          console.log('дизлайк')
          // console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  });
  return cardNew.generateCard();
}

//получение апи с сервера
const apiData = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    authorization: '54338beb-6a3f-46f8-bd6b-cdb1bf1c9692'
  }
})

const sectionCard = new Section({
  renderer: (item) => {
    sectionCard.addItem(createCard(item))
  }
}, { containerSelector: ('.cards__list') });


const popupNewFormCard = new PopupWithForm({
  popupSelector: ('.popup_add-card'),
  submitCallback: ({ nameCard, linkCard }) => {
    apiData.createCards({ name: nameCard, link: linkCard })
      .then((data) => {
        popupNewFormCard.renderLoading(true)
        sectionCard.addItem(createCard(data))
        console.log(data)
        // createCard(data)
      })
      .catch((err) => console.log(err))
      .finally(() => popupNewFormCard.renderLoading(false))

    popupNewFormCard.close()
  }
});

//аватар меняется и работает без перезагрузки = сохраняет
const popupNewFormAvatar = new PopupWithForm({
  popupSelector: ('.popup_avatar'),
  submitCallback: ({ linkAvatar }) => {
    popupNewFormAvatar.renderLoading(true)
    apiData.changeAvatar({ avatar: linkAvatar })
    profilePhotoUser.src = linkAvatar;
    popupNewFormAvatar.close()
  }
});

//получение класса UserInfo
const userInfo = new UserInfo({ nameSelector: ('.profile__name'), aboutSelector: ('.profile__info'), avatarSelector: ('.profile__photo') });
//получение класса PopupWithImage с попапом картинки
const popupNewCardImage = new PopupWithImage({ popupSelector: ('.popup_image') })
const popupConfirmDlt = new PopupWithConfirmation({ popupSelector: ('.popup_confirm') })


//создание экземляра  формы
// const popupNewFormProfile = new PopupWithForm({
//   popupSelector: ('.popup_edit-profile'),
//   submitCallback: (formValues) => {
//     popupNewFormProfile.renderLoading(true)
//     userInfo.setUserInfo(formValues);
//     apiData.updateUserInfo(formInputName.value, formAboutUser.value)
//     popupNewFormProfile.close();
//   }
// });

const popupNewFormProfile = new PopupWithForm({
  popupSelector: ('.popup_edit-profile'),
  submitCallback: ({ formValues }) => {
    // console.log(form)
    popupNewFormProfile.renderLoading(true)
    apiData.updateUserInfo({ formValues }).then((items) => {
      userInfo.setUserInfo(items);
      console.log(items)
    })
      .catch((err) => console.log(err))
      .finally(() => popupNewFormCard.renderLoading(false))
    popupNewFormProfile.close();
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
  popupNewFormProfile.renderLoading(false)
  popupNewFormProfile.open();
  const profileInfo = userInfo.getUserInfo();
  formInputName.value = profileInfo.nameUser;
  formAboutUser.value = profileInfo.aboutUser;
  validFormPopupEdit.disableSubmitButton();
  validFormPopupEdit.resetErrorsForm();
});

popupAvatarBtn.addEventListener('click', () => {
  popupNewFormAvatar.renderLoading(false)
  popupNewFormAvatar.open();
  validFormPopupAvatar.disableSubmitButton();
  validFormPopupAvatar.resetErrorsForm();
});

//вызовы всех функций
// sectionCard.renderItems();
popupNewFormCard.setEventListeners();
popupNewFormAvatar.setEventListeners()
popupConfirmDlt.setEventListeners();
popupNewCardImage.setEventListeners();
popupNewFormProfile.setEventListeners();
validFormPopupAvatar.enableValidation();
validFormPopupAdd.enableValidation();
validFormPopupEdit.enableValidation();

let userId;

apiData.getAllData()
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    sectionCard.renderItems(initialCards)
    console.log(initialCards)
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });


