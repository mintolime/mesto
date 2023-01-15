export default class Card {
  constructor(data, templateSelector,openImg) {
    this._name = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
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

    return this._newCard;
  }

  _setData() {
    const cardImg = this._newCard.querySelector('.cards__image');
    const cardTitle = this._newCard.querySelector('.cards__title');
    //данные для карточек
    cardImg.src = this._image;
    cardImg.alt = this._name;
    cardTitle.textContent = this._name;
  }

  _setEventListeners() {
    this._newCard.querySelector('.button_type_like').addEventListener('click', () => this._handleLikeClick());
    this._newCard.querySelector('.button_type_delete').addEventListener('click', () => this._handleLikeDelete());
    this._newCard.querySelector('.cards__image').addEventListener('click', () => this._openImg(this._name, this._image));
  }

  _handleLikeClick() { this._newCard.querySelector('.button_type_like').classList.toggle('button_type_like_active'); }

  _handleLikeDelete() {
    this._newCard.remove();
    this._newCard = null;
  }
}

