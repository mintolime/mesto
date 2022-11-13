
function openPopup(element) {
  element.classList.add('popup_opened')
};

function closePopup(element) {
  element.classList.remove('popup_opened')
};

const deleteCard = (event) => event.target.closest('.cards__item').remove();
const likeActive = (event) => event.target.classList.toggle('button_type_like_active');



//генерация карточки
const createCard = (element) => {
  const newCard = cardTemplate.cloneNode(true);

  const title = newCard.querySelector('.cards__title');
  const img = newCard.querySelector('.cards__image');
  title.textContent = element.name;
  img.src = element.link;
  img.alt = element.name;
  newCard.querySelector(".button_type_delete").addEventListener('click', deleteCard);
  newCard.querySelector(".button_type_like").addEventListener('click', likeActive);
  return newCard;
}

//обработчик событий
const submitCardAdd = (event) => {
  event.preventDefault();
  renderCard({ name: input.value, link: input.value })
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


