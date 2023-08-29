import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({toggleMenuVisibility, isDropdownMenuOpen}) {
  return (
    <div className="saved-movies">
      <div className="saved-movies__container">
        <Header isAccountButtonWhite={true} toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen}/>
        <SearchForm isDropdownMenuOpen={isDropdownMenuOpen} />
        <MoviesCardList isSavedMoviesPlace={true} />
      </div>
      <Footer />
    </div>
  )
}

export default SavedMovies;