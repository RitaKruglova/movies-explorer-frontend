import { useState } from 'react';

function MoviesCard({isSavedMoviesPlace = false, name, image, trailerLink, duration}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return(
    <article
      className="movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="movies-card__container">
        <a className="movie-card__trailer-link" href={trailerLink} target="blank">
          <img className="movies-card__image" src={image} alt="Постер фильма" />
        </a>
        <div className="movies-card__info">
          <h2 className="movies-card__title">{name}</h2>
          {isSavedMoviesPlace
            ?
            <button
              className={`movies-card__button movies-card__button_place_saved-movies${isHovered ? " movies-card__button_visible" : ""}`}
              type="button"
              onClick={handleLikeClick}
              aria-label="Поставить или убрать лайк"
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