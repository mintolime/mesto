export default class Card {
  constructor(data, templateSelector, handleCardClick,{handleDelete}) {
    this._name = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDelete = handleDelete;
    this._id = data._id;
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
    this._setData();
    this._setEventListeners();

    return this._newCard;
  }

  _setData() {
    //данные для карточек
    this._cardImg = this._newCard.querySelector('.cards__image');
    this._newCard.querySelector('.cards__title').textContent = this._name;
    this._cardImg.src = this._image;
    this._cardImg.alt = this._name;
  }

  _setEventListeners() {
    this._newCard.querySelector('.button_type_like').addEventListener('click', () => this._handleLikeClick());
    this._newCard.querySelector('.button_type_delete').addEventListener('click', () => this._handleDelete(this._id));
    this._newCard.querySelector('.cards__image').addEventListener('click', () => this._handleCardClick(this._name, this._image));
  }

  _handleLikeClick() { this._newCard.querySelector('.button_type_like').classList.toggle('button_type_like_active'); }

  _handleLikeDelete() {
    this._newCard.remove();
    this._newCard = null;
  }
}

