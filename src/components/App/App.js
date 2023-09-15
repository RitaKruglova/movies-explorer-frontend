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
