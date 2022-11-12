
function openPopup(element) {
  element.classList.add('popup_opened')
};

function closePopup(element) {
  element.classList.remove('popup_opened')
};





const deleteCard = (event) => {
  event.target.closest('.cards__item').remove();
}

const createCard = (dataCard) =>{
  const newCard = cardTemplate.cloneNode(true);

   const title = newCard.querySelector('.cards__title');
   title.textContent = dataCard.title;

  const image = newCard.querySelector('.cards__image');
  //  img.src = dataCard.src;
  //  img.alt = dataCard.title;

likeBtn.addEventListener('click', (evt) => evt.target.classList.toggle('button_type_like_active'));

   return newCard;
}

const renderCard = (item) => {
  cardContainer.innerAdjancentHTML('afterbegin',`
        <li class="cards__item">
          <img class="cards__image">
          <div class="cards__inner">
            <h2 class="cards__title">${initialCards.name}</h2>
            <button class="button button_type_like" type="button"></button>
          </div>
          <button class="button button_type_delete"></button>
        </li>
  `)
};

initialCards.forEach((item) => {
  renderCard(item);
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
closePopupBtn.addEventListener('click', closePopup(popup));
// deleteCardBtn.addEventListener('click', deleteCard);
openPopupBtn.addEventListener('click', addValue);
popupForm.addEventListener('submit', changeTextProfile);


