export default class UserInfo {
constructor({nameSelector, aboutSelector}) {
    this._nameSelector = document.querySelector(nameSelector);
    this._aboutSelector = document.querySelector(aboutSelector);
  }

  getUserInfo() { return { nameUser: this._nameSelector.textContent, aboutUser: this._aboutSelector.textContent, } }

  setUserInfo(data) {
    this._nameSelector.textContent = data.nameUser;
    this._aboutSelector.textContent = data.aboutUser;
  }
}
