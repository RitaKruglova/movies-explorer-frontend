import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

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
      <Routes>
        <Route path="/" element={<Main toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen} />} />
        <Route path="/movies" element={<Movies toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen} />} />
        <Route path="/saved-movies" element={<SavedMovies toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen} />} />
        <Route path="/profile" element={<Profile toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
