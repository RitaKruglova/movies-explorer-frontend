import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

function Movies({toggleMenuVisibility, isDropdownMenuOpen, handleSearchFormSubmit, isSavedMoviesPlace}) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [errorText, setErrorText] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);

  function handleChange(event) {
    setSearchInputValue(event.target.value);
  }

  function handleCheckboxChange(event) {
    setIsShort(event.target.checked);
  }

  useEffect(() => {
    const savedSearchInput = localStorage.getItem('searchInput');
    const savedFoundMovies = JSON.parse(localStorage.getItem('foundMovies'));

    if (savedSearchInput) {
      setSearchInputValue(savedSearchInput);
    }

    if (savedFoundMovies) {
      setFoundMovies(savedFoundMovies);
    }
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
    })
  }

  return (
    <>
      <Header isAccountButtonWhite={true} toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen}/>
      <div className="movies">
        {isLoading && <Preloader />}
        <div className="movies__container">
          <SearchForm
            isDropdownMenuOpen={isDropdownMenuOpen}
            searchInputValue={searchInputValue}
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            handleSubmit={handleSubmit}
            errorText={errorText}
            isShort={isShort}
          />
          <MoviesCardList
            foundMovies={foundMovies}
            isSavedMoviesPlace={false}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Movies;