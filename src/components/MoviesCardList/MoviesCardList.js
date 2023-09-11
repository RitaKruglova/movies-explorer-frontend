import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({isSavedMoviesPlace, foundMovies}) {
  function changeDurationFormat(timeInMinutes) {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;

    return `${hours}ч${minutes}м`;
  }

  return (
    <section className="movies-card-list">
      {foundMovies.map((movie) => (
        <MoviesCard
          isSavedMoviesPlace={isSavedMoviesPlace}
          name={movie.nameRU}
          image={`https://api.nomoreparties.co${movie.image.url}`}
          trailerLink={movie.trailerLink}
          duration={changeDurationFormat(movie.duration)}
          key={movie.id}
        />
    ))}
      
    </section>
  )
}

export default MoviesCardList;