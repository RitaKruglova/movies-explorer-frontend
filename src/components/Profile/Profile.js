import { useState } from "react";
import Header from "../Header/Header";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useNavigate } from "react-router-dom";

function Profile({toggleMenuVisibility, isDropdownMenuOpen}) {
  const navigate = useNavigate();
  const [isEditingAvailable, setEditingAvailable] = useState(false);

  function allowEditing() {
    setEditingAvailable(true);
  }

  function handleSignoutClick() {
    navigate('/register');
  }

  return (
    <>
      <Header isAccountButtonWhite={true} toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen} />
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, Рита!</h2>
          <form className="profile__form">
            <div className="profile__input-container">
              <label className="profile__label" for="name-input-profile">Имя</label>
              <input className="profile__input" id="name-input-profile" value="Рита" disabled={!isEditingAvailable} placeholder="Имя" />
            </div>
            <div className="profile__input-container">
              <label className="profile__label" for="email-input-profile">E-mail</label>
              <input className="profile__input" id="email-input-profile" value="kruglova404@yandex.ru" disabled={!isEditingAvailable} placeholder="E-mail"/>
            </div>
            <div className="profile__button-container">
              {!isEditingAvailable
                ?
                <>
                  <button
                    className="profile__button"
                    type="submit"
                    aria-label="Редактировать информацию профиля"
                    onClick={allowEditing}
                  >
                    Редактировать
                  </button>
                  <button 
                    className="profile__button profile__button_type_signout"
                    type="button"
                    aria-label="Выйти из аккаунта"
                    onClick={handleSignoutClick}
                  >
                    Выйти из аккаунта
                  </button>
                </>
                :
                <>
                  <span className="profile__error">При обновлении профиля произошла ошибка.</span>
                  <SubmitButton buttonText="Сохранить" buttonClass=" submit-button_place_profile" />
                </>
              }
              
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Profile;