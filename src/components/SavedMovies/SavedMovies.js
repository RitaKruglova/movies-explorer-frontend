import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { filterMovies } from "../../utils/utils";

function SavedMovies({ toggleMenuVisibility, isDropdownMenuOpen, isSavedMoviesPlace, deleteMovie, fetchLikedMovies }) {
  const [foundMovies, setFoundMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isShort, setIsShort] = useState(false);

  function handleChange(event) {
    setSearchInputValue(event.target.value);
  }

  function handleCheckboxChange(event) {
    setIsShort(event.target.checked);
  }

  useEffect(() => {
    fetchLikedMovies()
      .then(likedMovies => {
        setFoundMovies(likedMovies);
        setAllMovies(likedMovies);
      })
  }, []);

  useEffect(() => {
    if (searchInputValue) {
      setErrorText('');
    } else {
    }
  }, [searchInputValue]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!searchInputValue) {
      setErrorText('Нужно ввести ключевое слово');
    } else {
      setErrorText('');
      setFoundMovies(filterMovies(allMovies, {
        isShort,
        searchInputValue,
        isSavedMoviesPlace,
        foundMovies
      }));
    }
  }

  function handleMovieDelete(id) {
    setFoundMovies(prevMovies => prevMovies.filter(movie => movie._id !== id));
    setAllMovies(prevMovies => prevMovies.filter(movie => movie._id !== id));
  }

  useEffect(() => {
    setFoundMovies(filterMovies(allMovies, {
      isShort,
      searchInputValue,
      isSavedMoviesPlace,
      foundMovies
    }));
  }, [isShort]);

  return (
    <>
      <Header isAccountButtonWhite={true} toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen}/>
      <div className="saved-movies">
        <div className="saved-movies__container">
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
            deleteMovie={deleteMovie}
            fetchLikedMovies={fetchLikedMovies}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SavedMovies;