import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(document.cookie.includes('token'));
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  function checkToken() {
    mainApi.getCurrentUser()
      .then(res => {
        if (res) {
          setCurrentUser(res);
          setLoggedIn(true);
        }
      })
      .catch(() => {
        setCurrentUser({});
        setLoggedIn(false);
      });
  }

  useEffect(() => {
    checkToken();
  }, [])


  function toggleMenuVisibility() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);

    if (!isDropdownMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  function filterMovies(data, states) {
    if (states.isShort) {
      data = data.filter(movie => movie.duration <= 40);
    }
  
    const movies = data.filter(movie => {
      return Object.values(movie).some(item => {
        const itemToString = String(item);
        const lowerItem = itemToString.toLowerCase();
        return lowerItem.includes(states.searchInputValue.toLowerCase());
      });
    });
    if (!states.isSavedMoviesPlace) {
      localStorage.setItem('searchInput', states.searchInputValue);
      localStorage.setItem('foundMovies', JSON.stringify(movies));
    }
    return movies;
  }

  function updateStates(filteredMovies, states) {
    states.setFoundMovies(filteredMovies);
  }

  function handleSearchFormSubmit(event, states) {
    event.preventDefault();
    if (!states.searchInputValue) {
      states.setErrorText('Нужно ввести ключевое слово');
    } else {
      states.setIsLoading(true);
      
      if (states.isSavedMoviesPlace) {
        mainApi.getLikedMovies()
        .then(data => {
          return filterMovies(data, states);
        })
        .then(filteredMovies => {
          updateStates(filteredMovies, states);
        })
        .catch(err => console.log(err))
        .finally(() => states.setIsLoading(false))
      } else {
        moviesApi.getAllMovies()
        .then(data => {
          return filterMovies(data, states);
        })
        .then(filteredMovies => {
          updateStates(filteredMovies, states);
        })
        .catch(err => console.log(err))
        .finally(() => states.setIsLoading(false))
      }
    }
  }

  return (
    <div className="page">
      <LoggedInContext.Provider value={{loggedIn, setLoggedIn}} >
        <CurrentUserContext.Provider value={{currentUser, setCurrentUser}} >
          <Routes>
            <Route path="/"
              element={
                <Main
                  toggleMenuVisibility={toggleMenuVisibility}
                  isDropdownMenuOpen={isDropdownMenuOpen}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  toggleMenuVisibility={toggleMenuVisibility}
                  isDropdownMenuOpen={isDropdownMenuOpen}
                  handleSearchFormSubmit={handleSearchFormSubmit}
                  isSavedMoviesPlace={false}
                  element={Movies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  toggleMenuVisibility={toggleMenuVisibility}
                  isDropdownMenuOpen={isDropdownMenuOpen}
                  handleSearchFormSubmit={handleSearchFormSubmit}
                  isSavedMoviesPlace={true}
                  element={SavedMovies}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  toggleMenuVisibility={toggleMenuVisibility}
                  isDropdownMenuOpen={isDropdownMenuOpen}
                  element={Profile}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register />
              }
            />
            <Route
              path="/signin"
              element={
                <Login />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      </LoggedInContext.Provider>
    </div>
  );
}
export default App;
