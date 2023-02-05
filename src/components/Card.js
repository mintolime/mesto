
export default class Card {
  constructor({ data, userId, templateSelector, handleCardClick, handleCardDelete, handleCardLike, handleCardDislike }) {
    this._data = data;
    this._name = data.name;
    this._image = data.link;
    this._id = data._id;
    this._owner = data.owner._id;
    this._likeArray = data.likes;
    this._userId = userId;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
    this._handleCardDislike = handleCardDislike;
    this._handleCardDelete = handleCardDelete;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);

    return cardElement;
  }

  //функция отображения количества лайков
  updateLikesView(arr) {
    this._likeLenght = arr.likes.length;
    this._likeScore.textContent = this._likeLenght;
    //если лайков нет, то 0 отображаться не будет
    if (this._likeLenght < 1) {
      this._likeScore.textContent = ''
    }
  }

  //проверяем лайкнул ли карточку юзер
  _isLiked() {
    if (this._likeArray.some(i => i._id === this._userId)) {
      return true
    }
  }

  //проверка кнопки корзины на принадлежность
  _checkBtnCart() {
    if (this._owner !== this._userId) {
      this._deleteBtn.classList.add('button_type_delete_inactive')
    }
  }

  //генерация карточки
  generateCard() {
    this._newCard = this._getTemplate();
    this._setData();
    this._checkBtnCart();
    this._isLiked();
    this.updateLikesView(this._data)
    this._setEventListeners();

    return this._newCard;
  }

  //получение всех данных
  _setData() {
    //поиск по селекторам других элементов DOM для дальнейшего взаимодействия
    this._likeScore = this._newCard.querySelector('.cards__likes_score');
    this._deleteBtn = this._newCard.querySelector('.button_type_delete')
    this._likeBtn = this._newCard.querySelector('.button_type_like')
    //данные для карточек
    this._cardImg = this._newCard.querySelector('.cards__image');
    this._newCard.querySelector('.cards__title').textContent = this._name;
    this._cardImg.src = this._image;
    this._cardImg.alt = this._name;
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => this._handleLike());
    this._deleteBtn.addEventListener('click', () => this._handleCardDelete(this._id));
    this._cardImg.addEventListener('click', () => this._handleCardClick(this._name, this._image));
  }

  _handleLike() {
    if (this._isLiked == true || !this._likeBtn.classList.contains('button_type_like_active')) {
      this._handleCardLike(this._id);
      this._likeBtn.classList.add('button_type_like_active')
    }
    else {
      this._handleCardDislike(this._id);
      this._likeBtn.classList.remove('button_type_like_active')
    }
  }

  deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

}
