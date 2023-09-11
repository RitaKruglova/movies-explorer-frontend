import { useEffect, useState } from "react";
import { mainApi } from "../../utils/MainApi";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({isSavedMoviesPlace, foundMovies}) {
  const [movies, setMovies] = useState([]);
  function changeDurationFormat(timeInMinutes) {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;

    return `${hours}ч${minutes}м`;
  }

  useEffect(() => {
    mainApi.getLikedMovies()
      .then(movies => setMovies(movies));
  }, [])

  return (
    <section className="movies-card-list">
      {foundMovies.map((movie) => (
        <MoviesCard
          isSavedMoviesPlace={isSavedMoviesPlace}
          duration={changeDurationFormat(movie.duration)}
          key={movie.id}
          movie={movie}
          likedMovies={movies}
        />
    ))}
      
    </section>
  )
}

export default MoviesCardList;