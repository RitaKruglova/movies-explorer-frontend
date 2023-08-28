import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies() {
  return (
    <div className="movies">
      <Header isAccountButtonWhite={true} />
      <SearchForm />
      <MoviesCardList />
    </div>
  )
}

export default Movies;