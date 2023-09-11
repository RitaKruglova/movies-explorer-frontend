import { checkResponse } from "./utils";

const moviesApiUrl = 'https://api.nomoreparties.co/beatfilm-movies'

class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _fetch(method = 'GET', body = null) {
    return fetch(`${this._baseUrl}`, {
      method,
      headers: this._headers,
      body
    })
      .then(checkResponse)
  }

  getAllMovies() {
    return this._fetch();
  }
}

const moviesApi = new MoviesApi({
  baseUrl: moviesApiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { moviesApi };