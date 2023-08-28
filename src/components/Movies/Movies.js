import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

function Movies() {
  return (
    <div className="movies">
      <Header isAccountButtonWhite={true} />
      <SearchForm />
      <MoviesCardList />
      <ShowMoreButton />
      <Footer />
    </div>
  )
}

export default Movies;