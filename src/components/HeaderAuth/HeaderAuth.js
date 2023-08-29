import { useNavigate } from 'react-router-dom';

function HeaderAuth() {
  const navigate = useNavigate();

  function handleRegisterClick() {
    navigate('/signup');
  }

  function handleLoginClick() {
    navigate('/signin');
  }

  return (
    <nav className="header-auth">
      <button
        className="header-auth__button"
        type="button"
        onClick={handleRegisterClick}
        aria-label="Перейти на страницу регистрации"
      >
        Регистрация
      </button>
      <button
        className="header-auth__button"
        type="button"
        onClick={handleLoginClick}
        aria-label="Перейти на страницу авторизации"
      >
        Войти
      </button>
    </nav>
  )
}

export default HeaderAuth;