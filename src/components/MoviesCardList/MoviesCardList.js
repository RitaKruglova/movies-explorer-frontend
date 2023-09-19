import { useContext, useEffect, useState } from "react";
import { mainApi } from "../../utils/MainApi";
import MoviesCard from "../MoviesCard/MoviesCard";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import { WidthContext } from "../../contexts/WidthContext";

function MoviesCardList({ isSavedMoviesPlace, foundMovies, handleMovieDelete, isServerError, deleteMovie, saveMovie, removeMovie }) {
  const { width } = useContext(WidthContext);
  const [movies, setMovies] = useState([]);
  const [needShowMoreButton, setNeedShowMoreButton] = useState(false);

  function determineNumberOfMoviesToShow(width) {
    if (width >= 1267) return 16;
    if (width >= 945) return 12;
    if (width >= 762) return 8;
    return 5;
  }
  
  const numberOfMoviesToShow = determineNumberOfMoviesToShow(width);

  const [visibleMoviesCount, setVisibleMoviesCount] = useState(numberOfMoviesToShow);

  function changeDurationFormat(timeInMinutes) {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;

    return `${hours}ч${minutes}м`;
  }

  useEffect(() => {
    mainApi.getLikedMovies()
      .then(movies => setMovies(movies));
  }, []);

  useEffect(() => {
    if (foundMovies.length > visibleMoviesCount) {
      setNeedShowMoreButton(true);
    } else {
      setNeedShowMoreButton(false);
    }
  }, [foundMovies, visibleMoviesCount]);

  function handleShowMoreClick() {
    if (width >= 1267) {
      setVisibleMoviesCount(prevCount => prevCount + 4);
    } else if (width >= 945) {
      setVisibleMoviesCount(prevCount => prevCount + 3);
    } else {
      setVisibleMoviesCount(prevCount => prevCount + 2);
    }
  }

  useEffect(() => {
    setVisibleMoviesCount(numberOfMoviesToShow);
  }, [foundMovies]);

  return (
    <section className="movies-card-list">
      {isServerError && <p className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>}
        {foundMovies.length === 0 && <p className="movies-card-list__error">Ничего не найдено.</p>}
      <div className="movies-card-list__container">
        {!isSavedMoviesPlace && foundMovies.slice(0, visibleMoviesCount).map((movie) => (
          <MoviesCard
            isSavedMoviesPlace={isSavedMoviesPlace}
            duration={changeDurationFormat(movie.duration)}
            key={isSavedMoviesPlace ? movie.movieId : movie.id}
            movie={movie}
            likedMovies={movies}
            handleMovieDelete={handleMovieDelete}
            deleteMovie={deleteMovie}
            saveMovie={saveMovie}
            removeMovie={removeMovie}
          />
        ))}
        {isSavedMoviesPlace && foundMovies.map((movie) => (
          <MoviesCard
            isSavedMoviesPlace={isSavedMoviesPlace}
            duration={changeDurationFormat(movie.duration)}
            key={isSavedMoviesPlace ? movie.movieId : movie.id}
            movie={movie}
            likedMovies={movies}
            handleMovieDelete={handleMovieDelete}
            deleteMovie={deleteMovie}
          />
        ))}
      </div>
      {needShowMoreButton && <ShowMoreButton handleShowMoreClick={handleShowMoreClick} />}
    </section>
  )
}

export default MoviesCardList;
