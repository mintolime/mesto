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


const showError = (input, errorMessage) => {
  input.classList.add('form__input_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('form__input-error_active');
  // 2. Установите errorMessage в качестве значения textContent для formError.
  // 3. Добавьте formError класс form__input-error_active.
};

const hideError = (input) => {
  input.classList.remove('form__input_type_error');
    formError.classList.remove('form__input-error_active');
    formError.textContent = '';

  // 1. Удалите активный класс ошибки c formError.
  // 2. Очистите свойство textContent элемента formError.
};

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

const checkInputValidity = () => {
  if((!formInput.validity.valid || formInput === '')){
    showError(formInput, formInput.validationMessage/* 4. Передайте сообщение об ошибке. */);
  }
  else{
    hideError(formInput)
  }
};
function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
  
}

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', function () {
  checkInputValidity();
});

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
 // const buttonElement = formElement.querySelector('.button_type_save');

  // чтобы проверить состояние кнопки в самом начале
  //toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      // чтобы проверять его при изменении любого из полей
      //toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      setEventListeners(formElement);
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__inner'));
     fieldsetList.forEach((fieldSet) => {setEventListeners(fieldSet);});
    
  });
};

enableValidation();




//закрытие попапов
popups.forEach((popup) => {
  popup.addEventListener('click', function (evt) {
    const isOverlay = evt.target.classList.contains('popup')
    const isClose = evt.target.classList.contains('button_type_close')
    if (isOverlay || isClose && isClose) {
      closePopup(popup);
    }
  });
  //можно сократить?
  popup.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
       closePopup(popup);
      // console.log(event.key)
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

