import { useNavigate } from "react-router-dom";

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
    />
  );
}

export default AccountButton;