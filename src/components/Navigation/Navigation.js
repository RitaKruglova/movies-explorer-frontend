import { NavLink, Link } from "react-router-dom";

function Navigation({needMainLink}) {
  return (
    <nav className="navigation">
      {needMainLink
      &&
      <Link
        to="/"
        className="navigation__link"
      />
      }
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