import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({toggleMenuVisibility, isDropdownMenuOpen}) {
  return (
    <>
      <Header isAccountButtonWhite={true} toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen}/>
      <div className="saved-movies">
        <div className="saved-movies__container">
          <SearchForm isDropdownMenuOpen={isDropdownMenuOpen} />
          <MoviesCardList isSavedMoviesPlace={true} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SavedMovies;