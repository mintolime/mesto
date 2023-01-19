import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imgFigure = this._popupSelector.querySelector('.figure__image');
    this._infoFigure = this._popupSelector.querySelector('.figure__info');
  }

  open(name, img) {
    //данные карточек попапа
    this._imgFigure.src = img;
    this._imgFigure.alt = name;
    this._infoFigure.textContent = name;
    this._popupSelector.classList.add('popup__container_image-preview')//затемнения фона попапа с картинкой
    super.open();
  }
}
