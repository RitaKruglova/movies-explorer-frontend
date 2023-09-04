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
    <>
      <Header isAccountButtonWhite={true} toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen}/>
      <div className="movies">
        {isLoading && <Preloader />}
        <div className="movies__container">
          <SearchForm isDropdownMenuOpen={isDropdownMenuOpen} />
          <MoviesCardList />
          <ShowMoreButton />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Movies;