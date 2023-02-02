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
// import { initialCards } from '../utils/data-card.js'
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

//функция загрузки 
function renderLoading(isLoading) {
  const popupSbmtButton = document.querySelector('.button_type_save')
  const confirmText = 'Сохранение...'
  if (isLoading) {
    popupSbmtButton.textContent = confirmText;
  }
  else {
    popupSbmtButton.textContent = 'Сохранить'
    
  }
}

//функции создания карточки с использованием класса Сard
function createCard(item) {
  const cardNew = new Card(item, ('#card-template'), handleCardClick,
    {
      handleCardDelete: (cardId) => {
        popupConfirmDlt.open()
        popupConfirmDlt.handleDelete(() => {
          // console.log(cardId)
          apiData.deleteCard(cardId)
            .then(() => { cardNew.delete() })
        })
      }
    });
  return cardNew.generateCard();
}

//открытие попапа с картинкой
function handleCardClick(name, img) {
  popupNewCardImage.open(name, img);
};


//получение апи с сервера
const apiData = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    authorization: '54338beb-6a3f-46f8-bd6b-cdb1bf1c9692'
  }
})

apiData.getAllCards().then((res) => {
  const sectionCard = new Section({
    items: res,
    renderer: (item) => {
      sectionCard.addItem(createCard(item))
    }
  }, { containerSelector: ('.cards__list') });
  sectionCard.renderItems()
  console.log(res)
});

const popupNewFormCard = new PopupWithForm({
  popupSelector: ('.popup_add-card'),
  submitCallback: ({ nameCard, linkCard }) => {
    apiData.createCards({ name: nameCard, link: linkCard }).then((data) => {
      renderLoading(true)
      console.log({ data })
      createCard(data)
    })
    popupNewFormCard.close()
  }
});

//аватар меняется и работает без перезагрузки = сохраняет
const popupNewFormAvatar = new PopupWithForm({
  popupSelector: ('.popup_avatar'),
  submitCallback: ({ linkAvatar }) => {
    // console.log(popupAvatar)
    renderLoading(true)
    apiData.changeAvatar({ avatar: linkAvatar })
    profilePhotoUser.src = linkAvatar;
    popupNewFormAvatar.close()
  }
});

//получение класса UserInfo
const userInfo = new UserInfo(profileName, profileAboutUser);
//получение класса PopupWithImage с попапом картинки
const popupNewCardImage = new PopupWithImage({ popupSelector: ('.popup_image') })
const popupConfirmDlt = new PopupWithConfirmation({ popupSelector: ('.popup_confirm') })
const popupAvatar = new Popup({ popupSelector: ('.popup_avatar') })


//создание экземляра  формы
const popupNewFormProfile = new PopupWithForm({
  popupSelector: ('.popup_edit-profile'),
  submitCallback: (formValues) => {
    renderLoading(true)
    userInfo.setUserInfo(formValues);
    apiData.updateUserInfo(formInputName.value, formAboutUser.value)
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
  renderLoading(false)
});

popupProfileEditButton.addEventListener('click', () => {
  popupNewFormProfile.open();
  const profileInfo = userInfo.getUserInfo();
  formInputName.value = profileInfo.nameUser;
  formAboutUser.value = profileInfo.aboutUser;
  validFormPopupEdit.disableSubmitButton();
  validFormPopupEdit.resetErrorsForm();
  renderLoading(false)
});

popupAvatarBtn.addEventListener('click', () => {
  popupAvatar.open();
  validFormPopupAvatar.disableSubmitButton();
  validFormPopupAvatar.resetErrorsForm();
  renderLoading(false);
});

//вызовы всех функций
// sectionCard.renderItems();
popupNewFormCard.setEventListeners();
popupNewFormAvatar.setEventListeners()
popupAvatar.setEventListeners();
popupConfirmDlt.setEventListeners();
popupNewCardImage.setEventListeners();
popupNewFormProfile.setEventListeners();
validFormPopupAvatar.enableValidation();
validFormPopupAdd.enableValidation();
validFormPopupEdit.enableValidation();

apiData.getUserData()
  .then((res) => {
    // console.log(res)
    profileName.textContent = res.name
    profileAboutUser.textContent = res.about
    profilePhotoUser.src = res.avatar
  })
