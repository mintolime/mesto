export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._nameSelector = document.querySelector(nameSelector);
    this._aboutSelector = document.querySelector(aboutSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      nameUser: this._nameSelector.textContent,
      aboutUser: this._aboutSelector.textContent,
      linkAvatar: this._avatarSelector.src
    }
  }

  setUserInfo(data) {
    this._nameSelector.textContent = data.name;
    this._aboutSelector.textContent = data.about;
  }

  setAvatarLink(data) {
    this._avatarSelector.src = data.avatar;
  }
}
