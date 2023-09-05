import AccountButton from "../AccountButton/AccountButton";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import BurgerButton from "../BurgerButton/BurgerButton";
import { useState, useEffect, useContext } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import { LoggedInContext } from "../../contexts/LoggedInContext";

function Header({isMainPage = false, isAccountButtonWhite = false, toggleMenuVisibility, isDropdownMenuOpen}) {
  const { loggedIn } = useContext(LoggedInContext);
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
          {windowWidth > 768 && loggedIn && (
            <>
              <Navigation isMainPage={isMainPage}/>
              <AccountButton isAccountButtonWhite={isAccountButtonWhite} />
            </>
          )}
          {windowWidth > 768 && !loggedIn && (
            <HeaderAuth />
          )}
          {windowWidth <= 768 && loggedIn && (
            <>
              <BurgerButton onClick={toggleMenuVisibility} isOpen={isDropdownMenuOpen} />
              <DropdownMenu isDropdownMenuPlace={true} isOpen={isDropdownMenuOpen} />
            </>
          )}
          {windowWidth <= 768 && !loggedIn && (
            <HeaderAuth />
          )}
      </div>
    </header>
  );
}

export default Header;