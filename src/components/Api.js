export default class Api {
  constructor(baseUrl, header) {
    this._baseUrl = baseUrl;
    this._header = header;
  }

  _handleResponce(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      header: this.header,
    }).then(this._handleResponce);
  }
}
