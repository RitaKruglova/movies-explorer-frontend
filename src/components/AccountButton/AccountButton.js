import { useNavigate } from 'react-router-dom';
import accountButtonImage from '../../images/account-button-image.svg';

function AccountButton({isAccountButtonWhite = false}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/profile');
  }

  return (
    <button
      type="button"
      className={`account-button${isAccountButtonWhite ? " account-button_color_white" : ""}`}
      onClick={handleClick}
    >
      Аккаунт
      <div className={`account-button__round${isAccountButtonWhite ? " account-button__round_color_white" : ""}`}>
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