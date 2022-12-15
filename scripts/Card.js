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

    this._element.querySelector('.cards__image').src = this._image;
    this._element.querySelector('.cards__image').alt = this._name;
    this._element.querySelector('.cards__title').textContent = this._name;
    console.log(this._element)
    return this._element;
  }


}

initialCards.forEach((item) => {
  const card = new Card(item.link, item.name);
  const cardElement = card.generateCard();

  document.querySelector('.cards__list').prepend(cardElement);
});

