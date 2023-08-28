import { useState } from 'react';
import movieCover from '../../images/cover.jpg';

function MoviesCard({isSavedMoviesPlace = false}) {
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
        <img className="movies-card__image" src={movieCover} alt="Постер фильма" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">Твоё имя</h2>
          {isSavedMoviesPlace
            ?
            <button
              className={`movies-card__button movies-card__button_place_saved-movies${isHovered ? " movies-card__button_visible" : ""}`}
              type="button"
              onClick={handleLikeClick}
            />
            :
            <button
              className={`movies-card__button ${isLiked ? " movies-card__button_active" : ""}`}
              type="button"
              onClick={handleLikeClick}
            />
          }
        </div>
      </div>
      <p className="movies-card__duration">1ч50м</p>
    </article>
  )
}

export default MoviesCard;