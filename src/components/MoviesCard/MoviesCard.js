import { useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';

function MoviesCard({isSavedMoviesPlace = false, duration, movie, likedMovies, handleMovieDelete }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const foundLikedMovie = likedMovies.find(likedMovie => likedMovie.movieId === movie.id);
    
    if (foundLikedMovie) {
      movie._id = foundLikedMovie._id;
      setIsLiked(true);
    }
  }, [likedMovies]);

  function handleLikeClick() {
    if (!isLiked) {
      mainApi.createMovie(movie)
        .then((likedMovie) => {
          movie._id = likedMovie._id;
          setIsLiked(true);
        })
        .catch(err => console.log(err));
    } else {
      mainApi.deleteMovie(movie._id)
        .then(() => {
          setIsLiked(false);
        })
        .catch(err => console.log(err))
    }
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  function handleDeleteMovie() {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        handleMovieDelete(movie._id)
      })
      .catch(err => console.log(err))
  }

  return(
    <article
      className="movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="movies-card__container">
        <a className="movie-card__trailer-link" href={movie.trailerLink} target="blank">
          <img className="movies-card__image" src={isSavedMoviesPlace ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`} alt="Постер фильма" />
        </a>
        <div className="movies-card__info">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          {isSavedMoviesPlace
            ?
            <button
              className={`movies-card__button movies-card__button_place_saved-movies${isHovered ? " movies-card__button_visible" : ""}`}
              type="button"
              onClick={handleDeleteMovie}
              aria-label="Удалить фильм"
            />
            :
            <button
              className={`movies-card__button ${isLiked ? " movies-card__button_active" : ""}`}
              type="button"
              onClick={handleLikeClick}
              aria-label="Поставить или убрать лайк"
            />
          }
        </div>
      </div>
      <p className="movies-card__duration">{duration}</p>
    </article>
  )
}

export default MoviesCard;