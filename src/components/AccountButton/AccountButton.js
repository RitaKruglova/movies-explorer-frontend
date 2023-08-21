import { useNavigate } from 'react-router-dom';
import accountButtonImage from '../../images/account-button-image.svg';

function AccountButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/profile');
  }

  return (
    <button
      type="button"
      className="account-button"
      onClick={handleClick}
    >
      Аккаунт
      <div className="account-button__round">
        <img
          className="account-button__image"
          src={accountButtonImage}
          alt="Значок аккаунта"
        />
      </div>
    </button>
  );
}

export default AccountButton;