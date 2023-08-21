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
      >
        Регистрация
      </button>
      <button
        className="header-auth__button"
        type="button"
        onClick={handleLoginClick}
      >
        Войти
      </button>
    </nav>
  )
}

export default HeaderAuth;