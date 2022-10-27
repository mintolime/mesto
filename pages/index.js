let POPUP_ACTIVE_CLASS = 'popup_active';
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.form');
let openPopupBtn = document.querySelector('.button-edit');
let likeCardsBtn = document.querySelector('.button_cards-like');
let closePopupBtn = document.querySelector('.button_close-popup');


openPopupBtn.addEventListener('click', () => {
  popup.classList.add(POPUP_ACTIVE_CLASS);
});

popup.addEventListener('click', (event) => {
  if(!popupForm.contains(event.target) || event.target === closePopupBtn){
    popup.classList.remove(POPUP_ACTIVE_CLASS);
  }
});

