
function openPopup(element) {
  element.classList.add('popup_opened')
};

function closePopup(element) {
  element.classList.remove('popup_opened')
};







const createCard = (dataCard) => {
  const newCard = cardTemplate.cloneNode(true);

  const title = newCard.querySelector('.cards__title');
  title.textContent = dataCard.title;

  const image = newCard.querySelector('.cards__image');
  //  img.src = dataCard.src;
  //  img.alt = dataCard.title;

 // likeBtn.addEventListener('click', (evt) => evt.target.classList.toggle('button_type_like_active'));
  //deleteBtn.addEventListener('click', (evt) => 
  //evt.target.closest('.cards__item').remove());

  return newCard;
}

const renderCard = (dataCard) => {
  cardContainer.prepend(createCard(dataCard))
};

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
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


