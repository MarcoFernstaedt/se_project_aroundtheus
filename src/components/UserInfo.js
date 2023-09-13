export default class UserInfo {
  constructor(nameSelector, jobSelector, avatarSelector) {
    this._nameElem = document.querySelector(nameSelector);
    this._jobElem = document.querySelector(jobSelector);
    this._avatarElem = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElem.textContent,
      job: this._jobElem.textContent,
      avatar: this._avatarElem.src,
    };
  }

  setUserInfo({ name, job }) {
    this._nameElem.textContent = name;
    this._jobElem.textContent = job;
  }

  setAvatar(avatar) {
    this._avatarElem.src = avatar;
    this._avatarElem.alt = this._nameElem.textContent;
  }
}
