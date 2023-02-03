
export default class Card {
  constructor(data, templateSelector, handleCardClick, { handleCardDelete }) {
    this._data = data;
    this._name = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
    this._id = data._id;
    this._owner = data.owner._id;
    this._like = data.likes
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);

    return cardElement;
  }

 _viewLike(){
  const cardArray = document.querySelector('.cards__likes_score');
  cardArray.textContent = this._data.likes
  console.log(this._data.likes)
 }

  _checkBtnCart() {
    //заменить цифры 
    if (this._owner !== 'fd3fb99a0ba9889077d4cd36') {
      //  this.fix()
      this._deleteBtn.classList.add('button_type_delete_inactive')
    }
  }

  generateCard() {
    this._newCard = this._getTemplate();
    this._setData();
    this._checkBtnCart()
    this._viewLike();
    this._setEventListeners();

    return this._newCard;
  }

  _setData() {
    this._deleteBtn = this._newCard.querySelector('.button_type_delete')
    this.likeBtn = this._newCard.querySelector('.button_type_like') 
    //данные для карточек
    this._cardImg = this._newCard.querySelector('.cards__image');
    this._newCard.querySelector('.cards__title').textContent = this._name;
    this._cardImg.src = this._image;
    this._cardImg.alt = this._name;
  }

  _setEventListeners() {
    this._newCard.querySelector('.button_type_like').addEventListener('click', () => this._handleLikeClick());
    this._newCard.querySelector('.button_type_delete').addEventListener('click', () => this._handleCardDelete(this._id));
    this._newCard.querySelector('.cards__image').addEventListener('click', () => this._handleCardClick(this._name, this._image));
  }

  _handleLikeClick() { this.likeBtn.classList.toggle('button_type_like_active'); }

  delete() {
    this._newCard.remove();
    this._newCard = null;
  }
}

