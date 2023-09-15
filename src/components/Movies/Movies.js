import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import { moviesApi } from '../../utils/MoviesApi';
import { filterMovies, updateStates } from '../../utils/utils';

function Movies({toggleMenuVisibility, isDropdownMenuOpen, isSavedMoviesPlace}) {
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
    const savedCheckboxState = localStorage.getItem('checkbox').toLowerCase() === 'true';

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

    if (!searchInputValue) {
      setErrorText('Нужно ввести ключевое слово');
    } else {
      setErrorText('');
      setIsLoading(true);
      moviesApi.getAllMovies()
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
        .catch(()=> {
          setIsServerError(true);
        })
        .finally(() => setIsLoading(false))
    }
  }

  useEffect(() => {
    setFoundMovies(filterMovies(allMovies, {
      isShort,
      searchInputValue,
      isSavedMoviesPlace,
      foundMovies
    }))
  }, [isShort])

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
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Movies;