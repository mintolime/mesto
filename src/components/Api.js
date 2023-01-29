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

  _handleResponce(res) {
    if (res.ok) {
      // console.log(res)
      return res.json()
    }
    return Promise.reject(res.status);
  }
}