const profileEditBtn = document.querySelector('.button_profile-edit');
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.form');
const openPopupBtn = document.querySelector('.button_profile-edit');
const closePopupBtn = document.querySelector('.button_close-popup');
const profileName = document.querySelector('.profile__name');
const formInputName = document.querySelector('.form__input_text_name');
const profileAboutUser = document.querySelector('.profile__info');
const formAboutUser = document.querySelector('.form__input_text_about');

// открытие и закрытие попапа
openPopupBtn.addEventListener('click', function openPopup() {
  popup.classList.add('popup_opened')
});

popup.addEventListener('click', function closePopup() {
  if (!popupForm.contains(event.target) || event.target === closePopupBtn) {
    popup.classList.remove('popup_opened');
  }
});

// работа с формами
profileEditBtn.addEventListener('click', function addValue() {
  formInputName.value = profileName.textContent;
  formAboutUser.value = profileAboutUser.textContent;
});

popupForm.addEventListener('submit', function changeTextProfile(form) {
  form.preventDefault();
  profileName.textContent = formInputName.value;
  profileAboutUser.textContent = formAboutUser.value;
  popup.classList.remove('popup_opened');
});


