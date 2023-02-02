export default class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  getAllCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers
    })
      .then((res) => this._handleResponce(res))
  }

  createCards({ name, link }) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      body: JSON.stringify({ name, link }),
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

  updateUserInfo(name, about) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    });
  };

  changeAvatar({ avatar }) {
    fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({ avatar }),
      headers: this.headers,
    })
  }

  deleteCard(cardID) {
    return fetch(`${this.url}/cards/${cardID}`, {
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
