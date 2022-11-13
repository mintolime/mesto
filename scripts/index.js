
function openPopup(element) {
  element.classList.add('popup_opened')
};

function closePopup(element) {
  element.classList.remove('popup_opened')
};

const handleDeleteCard = (event) => {
  event.target.closest('.cards__item').remove();
}
const handleBtnLike = (event) => {
  event.target.closest('.cards__item').classList.toggle('.button_type_like_active');
}
//генерация карточки
const createCard = (element) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const newCard = cardTemplate.cloneNode(true);
  const deleteCardBtn = newCard.querySelector('.button_type_close');
  const likeBtn = newCard.querySelector('.button_type_like');

  newCard.querySelector('.cards__title').textContent = element.name;
  newCard.querySelector('.cards__image').src = element.link;
  newCard.querySelector('.cards__image').alt = element.name;


 

  return newCard;
}

//обработчик событий
const handleSubmitAddForm = (event) => {
  event.preventDefault();
  createCard({ name: input.value, link: input.value })
  input.value = '';
};



//добавление карточки 
const renderCard = (element) => {
  cardContainer.prepend(createCard(element));
};

//рендер всех карточек
popupForm.addEventListener("submit", handleSubmitAddForm);

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
  // renderCard({name: evt.target.imput});
  //imput.value = '';
  closePopup(popupProfile);
};




addPopupBtn.addEventListener('click', () => openPopup(popupCard));
openPopupBtn.addEventListener('click', () => openPopup(popupProfile));
closePopupBtn.addEventListener('click', closePopup(popup));
// deleteCardBtn.addEventListener('click', deleteCard);
openPopupBtn.addEventListener('click', addValue);
popupForm.addEventListener('submit', changeTextProfile);


