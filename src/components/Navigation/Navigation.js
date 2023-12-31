import { NavLink, Link } from "react-router-dom";
import AccountButton from "../AccountButton/AccountButton";
import { useContext } from "react";
import { WidthContext } from "../../contexts/WidthContext";

function Navigation({isMainPage, isDropdownMenuPlace = false, isMenuOpen}) {
  const { width } = useContext(WidthContext);

  return (
    <nav className={`navigation${isDropdownMenuPlace ? " navigation_place_dropdown-menu" : ""}${isMenuOpen ? " navigation_opened" : ""}`}>
      <div className="navigation__container">
        {isDropdownMenuPlace
        &&
        <Link
          to="/"
          className="navigation__link navigation__link_place_dropdown-menu"
        >
          Главная
        </Link>
        }
        <NavLink
          to="/movies"
          className={({isActive}) => `navigation__link${isActive ? " navigation__link_active" : ""}${isMainPage ? " navigation__link_color_white" : ""}${isDropdownMenuPlace ? " navigation__link_place_dropdown-menu" : ""}`}
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({isActive}) => `navigation__link${isActive ? " navigation__link_active" : ""}${isMainPage ? " navigation__link_color_white" : ""}${isDropdownMenuPlace ? " navigation__link_place_dropdown-menu" : ""}`}
        >
          Сохранённые фильмы
        </NavLink>
      </div>
      {width <= 768 && <AccountButton isAccountButtonWhite={true}/>}
    </nav>
  );
}

export default Navigation;