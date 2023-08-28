import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({isSavedMoviesPlace}) {
  return (
    <section className="movies-card-list">
      <MoviesCard isSavedMoviesPlace={isSavedMoviesPlace} />
      <MoviesCard isSavedMoviesPlace={isSavedMoviesPlace} />
      <MoviesCard isSavedMoviesPlace={isSavedMoviesPlace} />
      {/* <MoviesCard isSavedMoviesPlace={isSavedMoviesPlace} />
      <MoviesCard isSavedMoviesPlace={isSavedMoviesPlace} /> */}
      {/* <MoviesCard />
      <MoviesCard />
      <MoviesCard /> */}
      {/* <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard /> */}
    </section>
  )
}

export default MoviesCardList;