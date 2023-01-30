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
    return fetch(`${this.url}/cards/users/me `, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: owner.name,
        about: owner.about
      })
    })
      .then((res) => this._handleResponce(res))
  }

  changeAvatar(owner) {
    fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify(
        { avatar: owner.avatar }),
      headers: this.headers,
    })
  }

  deleteCard() {
    return fetch(`${this.url}/cards/${id}`, {
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