import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import { moviesApi } from '../../utils/MoviesApi';

function Movies({toggleMenuVisibility, isDropdownMenuOpen}) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [errorText, setErrorText] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [needShowMoreButton, setNeedShowMoreButton] = useState(false);
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
    event.preventDefault();

    if (!searchInputValue) {
      setErrorText('Нужно ввести ключевое слово');
    } else {
      setIsLoading(true);
      
    moviesApi.getAllMovies()
      .then(data => {

        if (isShort) {
          data = data.filter(movie => movie.duration <= 40);
        }

        const movies = data.filter(movie => {
          return Object.values(movie).some(item => {
            const itemToString = String(item);
            return itemToString.includes(searchInputValue);
          });
        });
        localStorage.setItem('searchInput', searchInputValue);
        localStorage.setItem('foundMovies', JSON.stringify(movies));
        return movies;
      })
      .then(filteredMovies => {
        console.log(filteredMovies)
        setFoundMovies(filteredMovies);
        if (filteredMovies.length === 0) {
          setNeedShowMoreButton(false);
        } else {
          setNeedShowMoreButton(true);
        }
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
    }
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
          <MoviesCardList foundMovies={foundMovies} />
          {needShowMoreButton && <ShowMoreButton />}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Movies;