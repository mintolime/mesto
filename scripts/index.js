
function openPopup(element) {
  element.classList.add('popup_opened')
};

function closePopup(element) {
  element.classList.remove('popup_opened')
};

const deleteCard = (event) => {
  event.target.closest('.cards__item').remove();
}
const likeActive = (event) => {
  event.target.classList.toggle('button_type_like_active');
}
//deleteCard.addEventListener('click', (event) => event.target.closest('.cards__item').remove());
  //likeActive.addEventListener('click', (event) => event.target.classList.toggle('button_type_like_active'));


//генерация карточки
const createCard = (element) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const newCard = cardTemplate.cloneNode(true);

  newCard.querySelector('.cards__title').textContent = element.name;
  newCard.querySelector('.cards__image').src = element.link;
  newCard.querySelector('.cards__image').alt = element.name;
  newCard.querySelector(".button_type_delete").addEventListener('click', deleteCard);
  newCard.querySelector(".button_type_like").addEventListener('click', likeActive);
  //newCard.querySelector(".card__image").addEventListener('click', showCard);
  //deleteCardBtn.addEventListener('click', deleteCard);

  return newCard;
}

//обработчик событий
const submitCardAdd = (event) => {
  event.preventDefault();
  createCard()
  input.value = '';
};



//добавление карточки 
const renderCard = (element) => {
  cardContainer.prepend(createCard(element));
};

//рендер всех карточек
formCard.addEventListener("submit", submitCardAdd);

initialCards.forEach((element) => {
  renderCard(element)
});






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
closePopupBtns.addEventListener('click', closePopup(popup));
// deleteCardBtn.addEventListener('click', deleteCard);
openPopupBtn.addEventListener('click', addValue);
popupForm.addEventListener('submit', changeTextProfile);


