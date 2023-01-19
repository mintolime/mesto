import '../pages/index.css'
import UserInfo from '../components/UserInfo.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import { initialCards } from '../utils/data-card.js'
import { validationConfig } from '../utils/data-validation.js'
import {
  formProfile,
  formInputName,
  formAboutUser,
  profileName,
  profileAboutUser,
  formCard,
  popupProfileEditButton,
  popupProfileAddButton,
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

//получение класса UserInfo
const userInfo = new UserInfo(profileName, profileAboutUser);
//получение класса PopupWithImage с попапом картинки
const popupNewCardImage = new PopupWithImage({popupSelector:('.popup_image')})

//создание экземляра карточек
const popupNewFormCard = new PopupWithForm({
  popupSelector:('.popup_add-card'),
  submitCallback: ({ nameCard, linkCard }) => {
    const cardItem = { name: nameCard, link: linkCard };
    sectionCard.addItem(createCard(cardItem))
    popupNewFormCard.close()
  }
});

//создание экземляра  формы
const popupNewFormProfile = new PopupWithForm({
  popupSelector:('.popup_edit-profile'),
  submitCallback: (formValues) => {
    userInfo.setUserInfo(formValues);
    popupNewFormProfile.close();
  }
});

//класс вставки разметки класса Card
const sectionCard = new Section({
  items: initialCards,
  renderer: (item) => {
    sectionCard.addItem(createCard(item))
  }
}, {containerSelector:('.cards__list')});

//создания экзепмляра форм
const validationFormPopupEdit = new FormValidator(formProfile, validationConfig);
const validationFormPopupAdd = new FormValidator(formCard, validationConfig);

//обработчики событий
popupProfileAddButton.addEventListener('click', () => {
  popupNewFormCard.open();
  validationFormPopupAdd.disableSubmitButton();
  validationFormPopupAdd.resetErrorsForm();
});

popupProfileEditButton.addEventListener('click', () => {
  const profileInfo = userInfo.getUserInfo();
  formInputName.value = profileInfo.nameUser;
  formAboutUser.value = profileInfo.aboutUser;
  popupNewFormProfile.open();
  validationFormPopupEdit.disableSubmitButton();
  validationFormPopupEdit.resetErrorsForm();
});

//вызовы всех функций
sectionCard.renderItems();
popupNewCardImage.setEventListeners();
popupNewFormProfile.setEventListeners();
popupNewFormCard.setEventListeners();
validationFormPopupAdd.enableValidation();
validationFormPopupEdit.enableValidation();
