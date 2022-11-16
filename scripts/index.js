//универсальные функции
function openPopup(element) {
  element.classList.add('popup_opened')
};

function closePopup(element) {
  element.classList.remove('popup_opened')
};
function resizeCard() {
  if (cardContainer.lenght < 3) {
    console.log('hi')
  }
};
resizeCard()

//функции открытия попапов
popupProfile.addEventListener('click', (event) => {
  let isOverlay = event.target.classList.contains('popup')
  let isClose = event.target.classList.contains('button_type_close')
  let isSave = event.target.classList.contains('button_type_save')

  if (isOverlay || isClose && isClose || isSave) {
    closePopup(popupProfile)
  }
})

popupImg.addEventListener('click', (event) => {
  let isOverlay = event.target.classList.contains('popup')
  let isClose = event.target.classList.contains('button_type_close')

  if (isOverlay || isClose && isClose || isSave) {
    closePopup(popupImg)
  }
})

popupCard.addEventListener('click', (event) => {
  let isOverlay = event.target.classList.contains('popup')
  let isClose = event.target.classList.contains('button_type_close')

  if (isOverlay || isClose && isClose || isSave) {
    closePopup(popupCard)
  }
})
//генерация карточки
const createCard = (name, img) => {
  const newCard = cardTemplate.cloneNode(true);

  const title = newCard.querySelector('.cards__title');
  title.textContent = name;
  const image = newCard.querySelector('.cards__image');
  image.src = img;
  image.alt = name;

  newCard.querySelector(".button_type_delete").addEventListener('click', deleteCard);
  newCard.querySelector(".button_type_like").addEventListener('click', likeActive);
  newCard.querySelector(".cards__image").addEventListener('click', openImg);


  function openImg() {
    openPopup(popupImg);
    imgFigure.src = img;
    infoFigure.textContent = name;
    popupImg.style.backgroundColor = 'rgb(0, 0, 0, .9)'; //затемнения фона попапа с картинкой
  };

  return newCard;
}
//действия кнопок внутри карточки
const deleteCard = (event) => event.target.closest('.cards__item').remove();
const likeActive = (event) => event.target.classList.toggle('button_type_like_active');

//обработчик событий
const submitCardAdd = (event) => {
  event.preventDefault();
  renderCard(cardContainer, createCard(cardInputName.value, cardImgLink.value));
  cardInputName.value = '';
  cardImgLink.value = '';
  closePopup(popupCard)
};

//добавление карточки 
const renderCard = (container, item) => {
  container.prepend(item);
};

//рендер всех карточек
initialCards.forEach((element) => renderCard(cardContainer, createCard(element.name, element.link)));

function addValue() {
  formInputName.value = profileName.textContent;
  formAboutUser.value = profileAboutUser.textContent;
};

function changeTextProfile(evt) {
  evt.preventDefault();
  profileName.textContent = formInputName.value;
  profileAboutUser.textContent = formAboutUser.value;
  //closePopup(popupProfile);
};

addPopupBtn.addEventListener('click', () => openPopup(popupCard));
openPopupBtn.addEventListener('click', () => openPopup(popupProfile));
openPopupBtn.addEventListener('click', addValue);
formProfile.addEventListener('submit', changeTextProfile);
formCard.addEventListener("submit", submitCardAdd);

