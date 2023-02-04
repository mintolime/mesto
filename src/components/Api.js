export default class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  getAllData() {
    return Promise.all([this.getAllCards(), this.getUserData()])
  }

  getAllCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers
    })
      .then((res) => this._handleResponce(res))
  }

  createCards(data) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      body: JSON.stringify({
        name: data.nameCard,
        link: data.linkCard
      }),
      headers: this.headers,
    })
      .then((res) => this._handleResponce(res))
  }

  getUserData() {
    return fetch(`${this.url}/users/me `, {
      headers: this.headers,
    })
      .then((res) => this._handleResponce(res))
  }

  updateUserInfo(data) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: data.nameUser,
        about: data.aboutUser
      })
    })
      .then((res) => this._handleResponce(res))
  };

  // changeAvatar({ avatar }) {
  //   fetch(`${this.url}/users/me/avatar`, {
  //     method: 'PATCH',
  //     body: JSON.stringify({ avatar }),
  //     headers: this.headers,
  //   })
  //     .then((res) => this._handleResponce(res))
  // }
    changeAvatar(data) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({ avatar: data.linkAvatar}),
      headers: this.headers,
    })
      .then((res) => this._handleResponce(res))
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .catch((err) => { err })
      .then((res) => this._handleResponce(res))
  }

  addLike(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this.headers,
    })
      .catch((err) => { err })
      .then((res) => this._handleResponce(res))
  }

  deleteLike(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .catch((err) => { err })
      .then((res) => this._handleResponce(res))
  }

  _handleResponce(res) {
    if (res.ok) {
      // console.log(res)
      return res.json()
    }
    return Promise.reject(res.status);
  }

}
