import AccountButton from "../AccountButton/AccountButton";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import BurgerButton from "../BurgerButton/BurgerButton";
import { useState, useEffect } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

function Header({modifier, isMainPage = false, isAccountButtonWhite = false}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function toggleMenuVisibility() {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  return (
    <header className={`header ${modifier}`}>
      <div className="header__container">
        <Logo />
          {windowWidth > 768 && isAuthorized && (
            <>
              <Navigation isMainPage={isMainPage}/>
              <AccountButton isAccountButtonWhite={isAccountButtonWhite} />
            </>
          )}
          {windowWidth > 768 && !isAuthorized && (
            <HeaderAuth />
          )}
          {windowWidth <= 768 && isAuthorized && (
            <>
              <BurgerButton onClick={toggleMenuVisibility} isOpen={isMenuOpen} />
              <DropdownMenu isDropdownMenuPlace={true} isOpen={isMenuOpen} />
            </>
          )}
          {windowWidth <= 768 && !isAuthorized && (
            <HeaderAuth />
          )}
      </div>
    </header>
  );
}

export default Header;