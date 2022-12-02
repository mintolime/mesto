//универсальные функции
function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupEsc);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupEsc);
};

//закрытие попапа по кнопке Esc
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const openPopupOverlay = document.querySelector('.popup_opened');
    closePopup(openPopupOverlay);
  }
};

//функции ввода
function fillPopupProfileInput() {
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
    const isOverlay = evt.target.classList.contains('popup')
    const isClose = evt.target.classList.contains('button_type_close')
    if (isOverlay || isClose && isClose) {
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
    //popupImg.style.backgroundColor = 'rgb(0, 0, 0, .9)'; //затемнения фона попапа с картинкой
  };

  return newCard;
}
//действия кнопок внутри карточки
const deleteCard = (evt) => evt.target.closest('.cards__item').remove();
const likeActive = (evt) => evt.target.classList.toggle('button_type_like_active');

//добавление карточки
const submitCardAdd = (evt) => {
  evt.preventDefault();
  saveCardBtn.classList.add('button_type_disable'); //дезейбл для кнопки при повторном добавлении карточки
  renderCard(cardContainer, createCard(cardInputName.value, cardImgLink.value));
  formCard.reset()
  closePopup(popupCard)
};
//рендер всех карточек
const renderCard = (container, item) => container.prepend(item);

initialCards.forEach((element) => renderCard(cardContainer, createCard(element.name, element.link)));

//обработчики событий
addPopupBtn.addEventListener('click', () => openPopup(popupCard));

openPopupBtn.addEventListener('click', () => {
  openPopup(popupProfile);
  fillPopupProfileInput();
});
formProfile.addEventListener('submit', changeTextProfile);
formCard.addEventListener("submit", submitCardAdd);

