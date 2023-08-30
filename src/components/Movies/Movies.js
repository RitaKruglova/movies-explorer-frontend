import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

function Movies({toggleMenuVisibility, isDropdownMenuOpen}) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="movies">
      {isLoading && <Preloader />}
      <div className="movies__container">
        <Header isAccountButtonWhite={true} toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen}/>
        <SearchForm isDropdownMenuOpen={isDropdownMenuOpen} />
        <MoviesCardList />
        <ShowMoreButton />
      </div>
      <Footer />
    </div>
  )
}

export default Movies;