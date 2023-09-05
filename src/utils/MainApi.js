import { checkResponse } from "./utils";

const { REACT_APP_BACKEND_URL = 'http://localhost:3000' } = process.env;

class MainApi {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _fetch(url, method = 'GET', body = null) {
    return fetch(`${this._baseUrl}${url}`, {
      method,
      headers: this._headers,
      body,
      mode: 'cors',
      credentials: 'include'
    })
      .then(checkResponse)
  }

  getCurrentUser() {
    return this._fetch('/users/me');
  }

  changeUserInfo({name, email}) {
    return this._fetch('/users/me', 'PATCH',
      JSON.stringify({
        name,
        email
      })
    )
  }
}

const mainApi = new MainApi({
  baseUrl: REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { mainApi }