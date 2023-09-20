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
import { IsSubmittingContext } from '../../contexts/IsSubmittingContext';
import { WidthContext } from '../../contexts/WidthContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { login, register } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

// Укажите мне пожалуйста в каком конкретном состоянии надпись "Ничего не найдено" не выводится. Я всё проверила и мои одногруппники тоже проверили и там всё выводится

function App() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
  }, []);

  function fetchLikedMovies() {
    return mainApi.getLikedMovies();
  }

  function handleSearchSubmit(states) {
    if (!states.searchInputValue) {
      states.setErrorText('Нужно ввести ключевое слово');
      return Promise.reject('Нужно ввести ключевое слово');
    } else {
      states.setErrorText('');
      states.setIsLoading(true);
      setIsSubmitting(false);
      return moviesApi.getAllMovies();
    }
  }

  function deleteMovie(movie) {
    return mainApi.deleteMovie(movie._id);
  }

  function saveMovie(movie, states) {
    mainApi.createMovie(movie)
      .then((likedMovie) => {
        movie._id = likedMovie._id;
        states.setIsLiked(true);
      })
      .catch(err => console.log(err));
  }

  function removeMovie(movie, states) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        states.setIsLiked(false);
      })
      .catch(err => console.log(err))
  }

  function setStates(data) {
    setCurrentUser(data);
    setLoggedIn(true);
    navigate('/movies', {replace: true});
  }

  function handleLoginSubmit(email, password, states) {
    setIsSubmitting(false);
    login(email, password)
      .then(() => {
        mainApi.getCurrentUser()
          .then(data => {
            setStates(data);
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        if (err.statusCode === 400) {
          states.setMessage('Вы ввели неправильный логин или пароль.')
        } else if (err.statusCode === 401) {
          states.setMessage(' При авторизации произошла ошибка. Токен не передан или передан не в том формате.')
        } else {
          states.setMessage('При авторизации произошла ошибка. Переданный токен некорректен.')
        }
      })
      .finally(() => {
        setIsSubmitting(true);
      })
  }

  function handleProfileSubmit(profileInputValues, states) {
    setIsSubmitting(false);
    mainApi.changeUserInfo(profileInputValues)
      .then(data => {
        setCurrentUser(data);
      })
      .then(() => {
        states.setIsSuccess(true);
        states.setMessage('Данные успешно сохранены');
      })
      .catch(err => {
        if (err.statusCode === 400) {
          states.setMessage('Пользователь с таким email уже существует.');
        } else {
          states.setMessage('При обновлении профиля произошла ошибка.');
        }
      })
      .finally(() => {
        setIsSubmitting(true);
      })
  }

  function handleRegisterSubmit(name, email, password, states) {
    setIsSubmitting(false);
    register(name, email, password)
      .then(() => {
        login(email, password)
          .then(() => {
            mainApi.getCurrentUser()
            .then(data => {
              setStates(data)
            })
            .catch(err => {
              console.log(err)
            })
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        if (err.statusCode === 400) {
          states.setMessage('Пользователь с таким email уже существует.');
        } else {
          states.setMessage('При регистрации пользователя произошла ошибка.');
        }
      })
      .finally(() => {
        setIsSubmitting(true);
      })
  }

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
      <WidthContext.Provider value={{width, setWidth}} >
        <IsSubmittingContext.Provider value={{isSubmitting, setIsSubmitting}} >
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
                      handleSearchSubmit={handleSearchSubmit}
                      deleteMovie={deleteMovie}
                      saveMovie={saveMovie}
                      removeMovie={removeMovie}
                      fetchLikedMovies={fetchLikedMovies}
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
                      deleteMovie={deleteMovie}
                      fetchLikedMovies={fetchLikedMovies}
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
                      handleProfileSubmit={handleProfileSubmit}
                      element={Profile}
                    />
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <Register
                    handleRegisterSubmit={handleRegisterSubmit}
                    />
                  }
                />
                <Route
                  path="/signin"
                  element={
                    <Login
                      handleLoginSubmit={handleLoginSubmit}
                    />
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </CurrentUserContext.Provider>
          </LoggedInContext.Provider>
        </IsSubmittingContext.Provider>
      </WidthContext.Provider>
    </div>
  );
}
export default App;
