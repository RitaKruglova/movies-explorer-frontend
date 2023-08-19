import { Link } from 'react-router-dom';

function HeaderAuth() {
  return (
    <nav className="header-auth">
      <Link className="header-auth__link" to="/signup">Регистрация</Link>
      <Link className="header-auth__link" to="/signin">Войти</Link>
    </nav>
  )
}

export default HeaderAuth;