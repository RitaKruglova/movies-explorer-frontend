import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }
  return (
    <img
      src={logo}
      alt="Логотип"
      className="logo"
      onClick={handleClick}
    />
  );
}

export default Logo;