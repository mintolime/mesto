import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'
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
    const openPopupOverlay = document.querySelector('.popup_opened');
    closePopup(openPopupOverlay);
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
popups.forEach((popup) => {
  popup.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('button_type_close')) {
      closePopup(popup);
    }
  });
});


// const allFormsValidator = ()  => {
//   const formList = Array.from(document.querySelectorAll('.form'));
//   formList.forEach((formElement) => {
//    formElement.enableValidation();

//   });
// };

//генерация карточки
// const createCard = (name, img) => {
//   const newCard = cardTemplate.cloneNode(true);

//   const likeBtn = newCard.querySelector('.button_type_like');
//   const deleteBtn = newCard.querySelector('.button_type_delete');
//   const title = newCard.querySelector('.cards__title');
//   title.textContent = name;
//   const image = newCard.querySelector('.cards__image');
//   image.src = img;
//   image.alt = name;

//   deleteBtn.addEventListener('click', deleteCard);
//   likeBtn.addEventListener('click', likeActive);
//   newCard.querySelector(".cards__image").addEventListener('click', openImg);

//   function openImg() {
//     openPopup(popupImg);
//     popupImg.classList.add('popup__container_image-preview')//затемнения фона попапа с картинкой
//     imgFigure.src = img;
//     imgFigure.alt = name;
//     infoFigure.textContent = name;
//   };

//   return newCard;
// }

//действия кнопок внутри карточки
// const deleteCard = (evt) => evt.target.closest('.cards__item').remove();
// const likeActive = (evt) => evt.target.classList.toggle('button_type_like_active');

initialCards.forEach((item) => {
  const card = new Card(item.link, item.name);
  const cardElement = card.generateCard();

  document.querySelector('.cards__list').prepend(cardElement);
});
//добавление карточки
const submitCardAdd = (evt) => {
  evt.preventDefault();
  renderCard(cardContainer, ('.cards__list'));
  formCard.reset()
  closePopup(popupCard)
};

//рендер всех карточек
// const renderCard = (container, item) => container.prepend(item);

// initialCards.forEach((element) => renderCard(cardContainer, createCard(element.name, element.link)));
// const renderCard = (card, selector) => {
//   const cardElement = card.generateCard();
//   document.querySelector(selector).prepend(cardElement);
// }

// initialCards.forEach(item => renderCard(item, '.cards__list' ));
// array.forEach(item => renderCard(item, '.elements__gallery'));

//обработчики событий
addPopupBtn.addEventListener('click', () => {
  openPopup(popupCard);
  // disableSubmitButton(saveCardBtn, 'button_type_disable');
  // resetErrorForm(popupCard);
});

openPopupBtn.addEventListener('click', () => {
  openPopup(popupProfile);
  // disableSubmitButton(saveCardBtn, 'button_type_disable');
  // resetErrorForm(popupProfile);
  fillPopupProfileInputs();
});

formProfile.addEventListener('submit', changeTextProfile);
formCard.addEventListener("submit", submitCardAdd);

