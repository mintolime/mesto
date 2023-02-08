//Спасибо за практические советы. если верно поняла ваши замечания, все должно корректно работать
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

  //функция отображения количества лайков и смены состояния лайка
  _updateLikesView() {
    this._likeLenght = this._likeArray.length;
    this._likeScore.textContent = this._likeLenght ? this._likeLenght : ''

// возращает true, что значит карточка лайкнута и нужно сделать её активной
    if (this._isLiked()) {
      this._like()
    }

    else {
      this._dislike()
    }
  }

  setLikes(likes) { // метод принимает массив с лайками (из объекта карточки от сервера)
    this._likeArray = likes // перезаписываем текущий массив с лайками на новый
    this._updateLikesView() // обновляем отображение лайков. _updateLikesView
    // возьмет лайки из this._likeArray
  }

  //проверяем лайкнул ли карточку юзер
  _isLiked() { return this._likeArray.some(i => i._id === this._userId) }

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
    this._updateLikesView();
    this._setEventListeners();

    return this._newCard;
  }

  setLikes(err) { // метод принимает массив с лайками (из объекта карточки от сервера)
    this._likeArray = err // перезаписываем текущий массив с лайками на новый
    this._updateLikesView() // обновляем отображение лайков. _updateLikesView
    // возьмет лайки из this._likeArray
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
    // если на карточке есть лайк пользователя, то:
    // вызываем коллбэк, который отправит на сервер запрос удалить лайк
    if (this._isLiked()) {
      this._handleCardDislike(this._id);
    }
    // иначе:
    // вызываем коллбэк, который отправит запрос поставить лайк
    else {
      this._handleCardLike(this._id);
    }
  }

  deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _like() {
    this._likeBtn.classList.add('button_type_like_active')
  }
  _dislike() {
    this._likeBtn.classList.remove('button_type_like_active')
  }
}
