import { useState } from 'react';
import movieCover from '../../images/cover.jpg';

function MoviesCard() {
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return(
    <article className="movies-card">
      <div className="movies-card__container">
        <img className="movies-card__image" src={movieCover} alt="Постер фильма" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">Твоё имя</h2>
          <button
            className={`movies-card__button ${isLiked ? " movies-card__button_active" : ""}`}
            type="button"
            onClick={handleLikeClick}
          />
        </div>
      </div>
      <p className="movies-card__duration">1ч50м</p>
    </article>
  )
}

export default MoviesCard;