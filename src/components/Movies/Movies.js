import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

function Movies() {
  return (
    <div className="movies">
      <div className="movies__container">
        <Header isAccountButtonWhite={true} />
        <SearchForm />
        <MoviesCardList />
        <ShowMoreButton />
      </div>
      <Footer />
    </div>
  )
}

export default Movies;