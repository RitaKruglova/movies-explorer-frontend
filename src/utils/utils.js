import { ResponseError } from "./responseError";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new ResponseError(res.status));
}

export function filterMovies(data, states) {
  if (states.isShort) {
    data = data.filter(movie => movie.duration <= 40);
  }

  const movies = data.filter(movie => {
    const { nameRU, nameEN } = movie;
    return [nameRU, nameEN].some(item => {
      item = item.toLowerCase();
      return item.includes(states.searchInputValue.toLowerCase());
    });
  });
  return movies;
}

export function updateStates(filteredMovies, states) {
  states.setFoundMovies(filteredMovies);
  states.setIsServerError(false);
}
