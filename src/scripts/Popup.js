export default class Popup {
  constructor(popupSelector) {
    this_popup = popupSelector;
  }

  open() {
  this_popup.classList.add('popup_opened')
  //document.addEventListener('keydown', closePopupByEsc);
  }
  close() {
   this_popup.classList.remove('popup_opened')
  }

  _handleEscClose() {

  }

  _setEventListeners(){

  }
}
