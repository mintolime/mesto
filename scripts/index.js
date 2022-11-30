//универсальные функции
function openPopup(popup) {
  popup.classList.add('popup_opened')
};

function closePopup(popup) {
  popup.classList.remove('popup_opened')
};
//функции ввода
function addValue() {
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

document.addEventListener('keydown', (evt) => {
  const popupOpen = document.querySelector('.popup_opened');
  if (evt.key === "Escape" && popupOpen) {
    closePopup(popupOpen);
  }
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
    imgFigure.src = img;
    imgFigure.alt = img;
    infoFigure.textContent = name;
    popupImg.style.backgroundColor = 'rgb(0, 0, 0, .9)'; //затемнения фона попапа с картинкой
  };

  return newCard;
}
//действия кнопок внутри карточки
const deleteCard = (evt) => evt.target.closest('.cards__item').remove();
const likeActive = (evt) => evt.target.classList.toggle('button_type_like_active');

//добавление карточки
const submitCardAdd = (evt) => {
  evt.preventDefault();
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
  addValue();
});
formProfile.addEventListener('submit', changeTextProfile);
formCard.addEventListener("submit", submitCardAdd);

