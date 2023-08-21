import { NavLink, Link } from "react-router-dom";

function Navigation({isMainPage, isDropdownMenuPlace = false}) {
  return (
    <nav className={`navigation${isDropdownMenuPlace ? " navigation_place_dropdown-menu" : ""}`}>
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
        className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}${isMainPage ? "navigation__link_color_white" : ""}${isDropdownMenuPlace ? "navigation__link_place_dropdown-menu" : ""}`}
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}${isMainPage ? "navigation__link_color_white" : ""}${isDropdownMenuPlace ? "navigation__link_place_dropdown-menu" : ""}`}
      >
        Сохранённые фильмы
      </NavLink>
    </nav>
  );
}

export default Navigation;