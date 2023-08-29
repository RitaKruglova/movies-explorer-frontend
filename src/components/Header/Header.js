import AccountButton from "../AccountButton/AccountButton";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import BurgerButton from "../BurgerButton/BurgerButton";
import { useState, useEffect } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

function Header({isMainPage = false, isAccountButtonWhite = false, toggleMenuVisibility, isDropdownMenuOpen}) {
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

  return (
    <header className={`header${isMainPage ? " header_color_blue" : ""}`}>
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
              <BurgerButton onClick={toggleMenuVisibility} isOpen={isDropdownMenuOpen} />
              <DropdownMenu isDropdownMenuPlace={true} isOpen={isDropdownMenuOpen} />
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