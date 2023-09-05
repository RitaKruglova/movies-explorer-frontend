import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

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
