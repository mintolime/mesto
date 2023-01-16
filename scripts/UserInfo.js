export default class UserInfo {
  constructor(name, about) {
    this._name = name;
    this._about = about;
  }
  getUserInfo() {
    this._userData = {
      name: this._name.textContent,
      about: this._about.textContent,
    }
    return this._userData
  }
  setUserInfo(data) {
    this._name.textContent = data.nameUser;
    this._about.textContent = data.aboutUser;
  }
}
