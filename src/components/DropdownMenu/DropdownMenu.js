import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import AccountButton from "../AccountButton/AccountButton";

function DropdownMenu() {

  return (
    <nav className="dropdown-menu">
      <div className="dropdown-menu__links">
        <Link className="dropdown-menu__link">Главная</Link>
        <Navigation />
      </div>
      <AccountButton />
    </nav>
  )
}

export default DropdownMenu;