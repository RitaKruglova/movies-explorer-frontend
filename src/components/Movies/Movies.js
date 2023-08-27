import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

function Movies() {
  return (
    <div className="movies">
      <Header isAccountButtonWhite={true} />
      <SearchForm />
    </div>
  )
}

export default Movies;