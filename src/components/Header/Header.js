import AccountButton from "../AccountButton/AccountButton";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import BurgerButton from "../BurgerButton/BurgerButton";
import { useContext } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import { LoggedInContext } from "../../contexts/LoggedInContext";
import { WidthContext } from "../../contexts/WidthContext";

function Header({isMainPage = false, isAccountButtonWhite = false, toggleMenuVisibility, isDropdownMenuOpen}) {
  const { loggedIn } = useContext(LoggedInContext);
  const { width } = useContext(WidthContext);

  return (
    <header className={`header${isMainPage ? " header_color_blue" : ""}`}>
      <div className="header__container">
        <Logo />
          {width > 768 && loggedIn && (
            <>
              <Navigation isMainPage={isMainPage}/>
              <AccountButton isAccountButtonWhite={isAccountButtonWhite} />
            </>
          )}
          {width > 768 && !loggedIn && (
            <HeaderAuth />
          )}
          {width <= 768 && loggedIn && (
            <>
              <BurgerButton onClick={toggleMenuVisibility} isOpen={isDropdownMenuOpen} />
              <DropdownMenu isDropdownMenuPlace={true} isOpen={isDropdownMenuOpen} />
            </>
          )}
          {width <= 768 && !loggedIn && (
            <HeaderAuth />
          )}
      </div>
    </header>
  );
}

export default Header;