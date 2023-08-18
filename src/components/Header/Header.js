import AccountButton from "../AccountButton/AccountButton";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import BurgerButton from "../BurgerButton/BurgerButton";
import { useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenuVisibility() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header">
      <Logo />
      {
        window.innerWidth > 768
        ?
        <>
          <Navigation needMainLink={false}/>
          <AccountButton />
        </>
        :
        <>
          <BurgerButton onClick={toggleMenuVisibility} isOpen={isMenuOpen} />
          {isMenuOpen && <DropdownMenu />}
        </>
      }
    </header>
  );
}

export default Header;