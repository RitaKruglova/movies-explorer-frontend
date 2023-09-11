import { checkResponse } from "./utils";

const { REACT_APP_BACKEND_URL = 'http://localhost:3000' } = process.env;

class MainApi {
  constructor({ baseUrl, headers }) {
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

  createMovie(movie) {
    return this._fetch('/movies', 'POST', JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN
    }));
  }

  deleteMovie(movieId) {
    return this._fetch(`/movies/${movieId}`, 'DELETE');
  }

  getLikedMovies() {
    return this._fetch('/movies');
  }
}

const mainApi = new MainApi({
  baseUrl: REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { mainApi }