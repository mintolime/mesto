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
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.cards__image').src = this._image;
    this._element.querySelector('.cards__image').alt = this._name;
    this._element.querySelector('.cards__title').textContent = this._name;

    //console.log(this._element)
    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector('.button_type_like').addEventListener('click', () => {
      this._handleLikeClick();
    });
     this._element.querySelector('.button_type_delete').addEventListener('click', () => {
      this._handleLikeDelete()
    });
  }
  _handleLikeClick() {
    this._element.querySelector('.button_type_like').classList.toggle('button_type_like_active');
  }
_handleLikeDelete() {
    this._element.querySelector('.button_type_delete').closest('.cards__item').remove();
  }
}

initialCards.forEach((item) => {
  const card = new Card(item.link, item.name);
  const cardElement = card.generateCard();

  document.querySelector('.cards__list').prepend(cardElement);
});

