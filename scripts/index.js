
function openPopup(element) {
  element.classList.add('popup_opened')
};

function closePopup(popup) {
  popup.classList.remove('popup_opened')
};


//генерация карточки
const createCard = (name, img) => {
  const newCard = cardTemplate.cloneNode(true);

  newCard.querySelector('.cards__title').textContent = name;
  newCard.querySelector('.cards__image').src = img;
  newCard.querySelector('.cards__image').alt = img;
  newCard.querySelector(".button_type_delete").addEventListener('click', deleteCard);
  newCard.querySelector(".button_type_like").addEventListener('click', likeActive);

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


initialCards.forEach((element) =>
  renderCard(cardContainer, createCard(element.name, element.link)));
;







//НЕ ТРОГАТЬ
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

addPopupBtn.addEventListener('click', () => openPopup(popupCard));
openPopupBtn.addEventListener('click', () => openPopup(popupProfile));
closePopupBtn.addEventListener('click', closePopup(popup));
// deleteCardBtn.addEventListener('click', deleteCard);
openPopupBtn.addEventListener('click', addValue);
formProfile.addEventListener('submit', changeTextProfile);
formCard.addEventListener("submit", submitCardAdd);

