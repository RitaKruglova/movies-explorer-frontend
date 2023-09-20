import { useContext, useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import { filterMovies, updateStates } from '../../utils/utils';
import { IsSubmittingContext } from '../../contexts/IsSubmittingContext';

function Movies({ toggleMenuVisibility, isDropdownMenuOpen, isSavedMoviesPlace, handleSearchSubmit, deleteMovie, saveMovie, removeMovie, fetchLikedMovies }) {
  const { setIsSubmitting } = useContext(IsSubmittingContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [errorText, setErrorText] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [isServerError, setIsServerError] = useState(false);

  function handleChange(event) {
    setSearchInputValue(event.target.value);
  }

  function handleCheckboxChange(event) {
    setIsShort(event.target.checked);
  }

  useEffect(() => {
    const savedSearchInput = localStorage.getItem('searchInput');
    const savedFoundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    const savedCheckboxState = (localStorage.getItem('checkbox') || 'false').toLowerCase() === 'true';

    if (savedSearchInput) {
      setSearchInputValue(savedSearchInput);
    }

    if (savedFoundMovies) {
      setFoundMovies(savedFoundMovies);
      setAllMovies(savedFoundMovies);
    }

    if (savedCheckboxState) {
      setIsShort(savedCheckboxState);
    }
  }, []);

  useEffect(() => {
    if (searchInputValue) {
      setErrorText('');
    }
  }, [searchInputValue]);
  
  function handleSubmit(event) {
    event.preventDefault();
    
    handleSearchSubmit({
      searchInputValue,
      setErrorText,
      setIsLoading
    })
    .then(data => {
      setAllMovies(data);
      return filterMovies(data, {
        isShort,
        searchInputValue,
        isSavedMoviesPlace,
        foundMovies
      })
    })
    .then(movies => {
      updateStates(movies, {
        setFoundMovies,
        setIsServerError
      });
      localStorage.setItem('searchInput', searchInputValue);
      localStorage.setItem('foundMovies', JSON.stringify(movies));
      localStorage.setItem('checkbox', isShort);
    })
    .catch((err)=> {
      if (searchInputValue) {
        setIsServerError(true);
      } else {
        console.log(err)
      }
    })
    .finally(() => {
      setIsLoading(false);
      setIsSubmitting(true);
    })
  }

  useEffect(() => {
    setFoundMovies(filterMovies(allMovies, {
      isShort,
      searchInputValue,
      isSavedMoviesPlace,
      foundMovies
    }))
    localStorage.setItem('checkbox', isShort)
  }, [isShort, allMovies])

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
            isServerError={isServerError}
            deleteMovie={deleteMovie}
            saveMovie={saveMovie}
            removeMovie={removeMovie}
            fetchLikedMovies={fetchLikedMovies}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Movies;