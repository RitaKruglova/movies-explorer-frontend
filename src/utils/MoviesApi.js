import { checkResponse } from "./utils";
import { MOVIES_API_URL } from "../constants/constants";

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
  baseUrl: MOVIES_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { moviesApi };