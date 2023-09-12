import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import { mainApi } from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";

function SavedMovies({toggleMenuVisibility, isDropdownMenuOpen, handleSearchFormSubmit, isSavedMoviesPlace}) {
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const [needShowMoreButton, setNeedShowMoreButton] = useState(false);

  function handleChange(event) {
    setSearchInputValue(event.target.value);
  }

  function handleCheckboxChange(event) {
    setIsShort(event.target.checked);
  }

  useEffect(() => {
    mainApi.getLikedMovies()
      .then(likedMovies => {
        setFoundMovies(likedMovies)
      })
  }, []);

  useEffect(() => {
    if (searchInputValue) {
      setErrorText('');
    }
  }, [searchInputValue]);

  function handleSubmit(event) {
    handleSearchFormSubmit(event, {
      searchInputValue,
      setErrorText,
      setIsLoading,
      isShort,
      isSavedMoviesPlace,
      setFoundMovies,
      setNeedShowMoreButton
    })
  }

  function handleMovieDelete(id) {
    setFoundMovies(prevMovies => prevMovies.filter(movie => movie._id !== id))
  }

  return (
    <>
      <Header isAccountButtonWhite={true} toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen}/>
      <div className="saved-movies">
        <div className="saved-movies__container">
          {isLoading && <Preloader />}
          <SearchForm
            isDropdownMenuOpen={isDropdownMenuOpen}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            errorText={errorText}
          />
          <MoviesCardList
            isSavedMoviesPlace={isSavedMoviesPlace}
            foundMovies={foundMovies}
            handleMovieDelete={handleMovieDelete}
            setNeedShowMoreButton={setNeedShowMoreButton}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SavedMovies;