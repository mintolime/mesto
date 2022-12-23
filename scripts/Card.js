export default class Card {
  constructor(data, templateSelector, imgFigure, infoFigure, openImg) {
    this._name = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
    this._imgFigure = imgFigure;
    this._infoFigure = infoFigure;
    this._openImg = openImg;
  }
  
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._newCard = this._getTemplate();
    this._setEventListeners();
    this._setData();
    //console.log(this._newCard)
    return this._newCard;
  }

  _setData() {
    this._newCard.querySelector('.cards__image').src = this._image;
    this._newCard.querySelector('.cards__image').alt = this._name;
    this._newCard.querySelector('.cards__title').textContent = this._name;
    this._imgFigure.src = this._image;
    this._imgFigure.alt = this._name;
    this._infoFigure.textContent = this._name;
  }

  _setEventListeners() {
    this._newCard.querySelector('.button_type_like').addEventListener('click', () => this._handleLikeClick());
    this._newCard.querySelector('.button_type_delete').addEventListener('click', () => this._handleLikeDelete());
    this._newCard.querySelector('.cards__image').addEventListener('click', () => this._openImg(this._name, this._image));
  }

  _handleLikeClick() {
    this._newCard.querySelector('.button_type_like').classList.toggle('button_type_like_active');
  }

  _handleLikeDelete() {
    this._newCard.remove();
    this._newCard = null;
  }

}

