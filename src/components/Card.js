
export default class Card {
  constructor(data, templateSelector, handleCardClick, { handleCardDelete }, { handleCardLike },api) {
    this._api = api;
    this._name = data.name;
    this._image = data.link;
    this._id = data._id;
    this._owner = data.owner._id;
    this._likeLenght = data.likes.length
    this._likeArray = data.likes
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
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
  _viewLikes() {
    this._cardArray.textContent = this._likeLenght;
    //если лайков нет, то 0 отображаться не будет
    if (this._likeLenght == 0) {
      this._cardArray.textContent = ''
    }
  }

  //проверяем лайкнул ли карточку юзер
  isLiked() {
    if (this._likeArray.some(i => i._id !== this._owner)) {
      // console.log(this._likeArray)
      return true
    }

  }
  //  || this._likeLenght > 0


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
    this._checkBtnCart();
    this._viewLikes();
    this.isLiked();
    this._setEventListeners();

    return this._newCard;
  }

  _setData() {
    //поиск по селекторам других элементов DOM для дальнейшего взаимодействия
    this._cardArray = this._newCard.querySelector('.cards__likes_score');
    this._deleteBtn = this._newCard.querySelector('.button_type_delete')
    this.likeBtn = this._newCard.querySelector('.button_type_like')
    //данные для карточек
    this._cardImg = this._newCard.querySelector('.cards__image');
    this._newCard.querySelector('.cards__title').textContent = this._name;
    this._cardImg.src = this._image;
    this._cardImg.alt = this._name;
  }

  _setEventListeners() {
    this._newCard.querySelector('.button_type_like').addEventListener('click', () => this._handleCardLike());
    this._newCard.querySelector('.button_type_delete').addEventListener('click', () => this._handleCardDelete(this._id));
    this._newCard.querySelector('.cards__image').addEventListener('click', () => this._handleCardClick(this._name, this._image));
  }


  like() {
if(!this.likeBtn.classList.contains('button_type_like_active')){
   this._api.changeLikeCard({ cardId: this._id , isLiked: true })
  .then(() => {
          this.likeBtn.classList.add('button_type_like_active');
           console.log('лайк')
          // likeCount.textContent = data.likes.length
        })
        .catch((err) => {
          console.log(err)
        })
}
else {
      this._api.changeLikeCard({ cardId: this._id , isLiked: false })
        .then(() => {
          this.likeBtn.classList.remove('button_type_like_active');
          this._cardArray.textContent = this._likeLenght;
        console.log('дизлайк')

        })
        .catch((err) => {
          console.log(err)
        })
  }
  }


  delete() {
    this._newCard.remove();
    this._newCard = null;
  }
}

