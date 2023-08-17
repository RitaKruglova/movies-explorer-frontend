import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink
        to="/movies"
        className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}
      >
        Сохранённые фильмы
      </NavLink>
    </nav>
  );
}

export default Navigation;