import { useEffect, useState } from "react";
import { mainApi } from "../../utils/MainApi";
import MoviesCard from "../MoviesCard/MoviesCard";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

function MoviesCardList({isSavedMoviesPlace, foundMovies, handleMovieDelete}) {
  const [movies, setMovies] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [needShowMoreButton, setNeedShowMoreButton] = useState(false);

  function determineNumberOfMoviesToShow(width) {
    if (width >= 1267) return 16;
    if (width >= 945) return 12;
    if (width >= 762) return 8;
    return 5;
  }
  
  const numberOfMoviesToShow = determineNumberOfMoviesToShow(width);

  const [visibleMoviesCount, setVisibleMoviesCount] = useState(numberOfMoviesToShow);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

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
    console.log(foundMovies.length, visibleMoviesCount)
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
    setVisibleMoviesCount(numberOfMoviesToShow)
  }, [foundMovies]);

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {!isSavedMoviesPlace && foundMovies.slice(0, visibleMoviesCount).map((movie) => (
          <MoviesCard
            isSavedMoviesPlace={isSavedMoviesPlace}
            duration={changeDurationFormat(movie.duration)}
            key={isSavedMoviesPlace ? movie.movieId : movie.id}
            movie={movie}
            likedMovies={movies}
            handleMovieDelete={handleMovieDelete}
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
          />
        ))}
      </div>
      {needShowMoreButton && <ShowMoreButton handleShowMoreClick={handleShowMoreClick} />}
    </section>
  )
}

export default MoviesCardList;
