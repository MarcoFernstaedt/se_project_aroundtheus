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
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._header,
    }).then(this._handleResponce);
  }

  editUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({
        name: data.name,
        job: data.job,
      }),
    }).then(this._handleResponce);
  }
}
