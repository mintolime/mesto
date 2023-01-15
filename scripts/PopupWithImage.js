import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // this._name = data.name;
    // this._image = data.link;
     this._imgFigure = this._popup.querySelector('.figure__image');
   this._infoFigure = this._popup.querySelector('.figure__info');
  }



  open(name,img) {
  //данные карточек попапа
     this._imgFigure.src = img;
    this._imgFigure.alt = name;
    this._infoFigure.textContent = name;
    this._popup.classList.add('popup__container_image-preview')//затемнения фона попапа с картинкой
 super.open();
  }

  setEventListeners() {
    super.setEventListeners()
    this._popup.addEventListener('click', () => {
      console.log(evt.target)
      // this.open(this._imgFigure, this._imgFigure)
      // super.fix()
      });
  }
}
