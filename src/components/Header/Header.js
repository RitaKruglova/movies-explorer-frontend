import AccountButton from "../AccountButton/AccountButton";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import BurgerButton from "../BurgerButton/BurgerButton";
import { useState, useEffect } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
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
  }

  return (
    <header className="header">
      <Logo />
        {windowWidth > 768 && isAuthorized && (
          <>
            <Navigation />
            <AccountButton />
          </>
        )}
        {windowWidth > 768 && !isAuthorized && (
          <HeaderAuth />
        )}
        {windowWidth <= 768 && isAuthorized && (
          <>
            <BurgerButton onClick={toggleMenuVisibility} isOpen={isMenuOpen} />
            {isMenuOpen && <DropdownMenu />}
          </>
        )}
        {windowWidth <= 768 && !isAuthorized && (
          <HeaderAuth />
        )}
    </header>
  );
}

export default Header;