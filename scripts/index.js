//POPUP
const popups = document.querySelectorAll('.popup');
const popupCard = document.querySelector('.popup_add-card');
const popupProfile = document.querySelector('.popup_edit-profile');
const popupImg = document.querySelector('.popup_image');
//PROFILE
const formProfile = document.querySelector('[name="formProfile"]');
const profileName = document.querySelector('.profile__name');
const formInputName = document.querySelector('.form__input_text_name');
const profileAboutUser = document.querySelector('.profile__info');
const formAboutUser = document.querySelector('.form__input_text_about');
//CARD
const cardTemplate = document.querySelector('#card-template').content;
const cardContainer = document.querySelector('.cards__list');
const cardImg = document.querySelector('.cards__image');
const formCard = document.querySelector('[name="formCard"]');
const cardInputName = document.querySelector('[name="nameCard"]');
const cardImgLink = document.querySelector('[name="linkCard"]');
const imgFigure = document.querySelector('.figure__image');
const infoFigure = document.querySelector('.figure__info');
//BUTTON
const openPopupBtn = document.querySelector('.button_type_edit');
const addPopupBtn = document.querySelector('.button_type_add');
const saveCardBtn = formCard.querySelector('.button_type_save');

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

//генерация карточки
const createCard = (name, img) => {
  const newCard = cardTemplate.cloneNode(true);

  const likeBtn = newCard.querySelector('.button_type_like');
  const deleteBtn = newCard.querySelector('.button_type_delete');
  const title = newCard.querySelector('.cards__title');
  title.textContent = name;
  const image = newCard.querySelector('.cards__image');
  image.src = img;
  image.alt = name;

  deleteBtn.addEventListener('click', deleteCard);
  likeBtn.addEventListener('click', likeActive);
  newCard.querySelector(".cards__image").addEventListener('click', openImg);

  function openImg() {
    openPopup(popupImg);
    popupImg.classList.add('popup__container_image-preview')//затемнения фона попапа с картинкой
    imgFigure.src = img;
    imgFigure.alt = name;
    infoFigure.textContent = name;
  };

  return newCard;
}
//действия кнопок внутри карточки
const deleteCard = (evt) => evt.target.closest('.cards__item').remove();
const likeActive = (evt) => evt.target.classList.toggle('button_type_like_active');

//добавление карточки
const submitCardAdd = (evt) => {
  evt.preventDefault();
  //disableSubmitButton(saveCardBtn, enableValidation); //дезейбл для кнопки при повторном добавлении карточки
  renderCard(cardContainer, createCard(cardInputName.value, cardImgLink.value));
  formCard.reset()
  closePopup(popupCard)
};

//рендер всех карточек
const renderCard = (container, item) => container.prepend(item);

initialCards.forEach((element) => renderCard(cardContainer, createCard(element.name, element.link)));

//обработчики событий
addPopupBtn.addEventListener('click', () => {
  openPopup(popupCard);
  disableSubmitButton(saveCardBtn, 'button_type_disable');
  resetErrorForm(popupCard);
});

openPopupBtn.addEventListener('click', () => {
  openPopup(popupProfile);
  disableSubmitButton(saveCardBtn, 'button_type_disable');
  resetErrorForm(popupProfile);
  fillPopupProfileInputs();
});

formProfile.addEventListener('submit', changeTextProfile);
formCard.addEventListener("submit", submitCardAdd);

