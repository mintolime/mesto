class Card {
  constructor(link, name) {
    this._name = name;
    this._image = link;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector('#card-template')
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
    document.querySelector('.figure__image').src = this._image
    document.querySelector('.figure__info').textContent = this._name;
    document.querySelector('.figure__info').alt = this._name; //нужно переместить в файл elements , либо сделать более лаконично! пока работает
  }

  _setEventListeners() {
    this._newCard.querySelector('.button_type_like').addEventListener('click', () => this._handleLikeClick());
    this._newCard.querySelector('.button_type_delete').addEventListener('click', () => this._handleLikeDelete());
    this._newCard.querySelector('.cards__image').addEventListener('click', () => this._openPopupImg());
  }
  _handleLikeClick() {
    this._newCard.querySelector('.button_type_like').classList.toggle('button_type_like_active');
  }
  _handleLikeDelete() {
    this._newCard.remove();
    this._newCard = null;
  }
  _openPopupImg() {
    openPopup(popupImg);
    //console.log(popupImg)
    popupImg.classList.add('popup__container_image-preview')//затемнения фона попапа с картинкой
  }
}


initialCards.forEach((item) => {
  const card = new Card(item.link, item.name);
  const cardElement = card.generateCard();

  document.querySelector('.cards__list').prepend(cardElement);
});

