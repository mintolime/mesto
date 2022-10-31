const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.form');
const openPopupBtn = document.querySelector('.button_profile-edit');
const closePopupBtn = document.querySelector('.button_close-popup');
const profileName = document.querySelector('.profile__name');
const formInputName = document.querySelector('.form__input_text_name');
const profileAboutUser = document.querySelector('.profile__info');
const formAboutUser = document.querySelector('.form__input_text_about');

// сначала объявляем все переменные, затем описываем функции, в самом конце устанавливаем события.
function openPopup() {
  popup.classList.add('popup_opened')
};

function closePopup() {
  if (!popupForm.contains(event.target) || event.target === closePopupBtn) {
    popup.classList.remove('popup_opened');
  }
};

function addValue() {
  formInputName.value = profileName.textContent;
  formAboutUser.value = profileAboutUser.textContent;
  openPopup();
};

function changeTextProfile(evt) {
  evt.preventDefault();
  profileName.textContent = formInputName.value;
  profileAboutUser.textContent = formAboutUser.value;
  closePopup();
};

popupForm.addEventListener('submit', changeTextProfile);
openPopupBtn.addEventListener('click', addValue);
popup.addEventListener('click', closePopup);