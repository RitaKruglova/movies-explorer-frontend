import Header from "../Header/Header";

function Profile({toggleMenuVisibility, isDropdownMenuOpen}) {
  return (
    <>
      <Header isAccountButtonWhite={true} toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen} />
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, Рита!</h2>
          <form className="profile__form">
            <div className="profile__input-container">
              <label className="profile__label" for="name-input-profile">Имя</label>
              <input className="profile__input" id="name-input-profile" value="Рита" />
            </div>
            <div className="profile__input-container">
              <label className="profile__label" for="email-input-profile">E-mail</label>
              <input className="profile__input" id="email-input-profile" value="kruglova404@yandex.ru" />
            </div>
            <div className="profile__button-container">
              <button
                className="profile__button"
                type="submit"
                aria-label="Редактировать информацию профиля"
              >
                Редактировать
              </button>
              <button 
                className="profile__button profile__button_type_signout"
                type="button"
                aria-label="Выйти из аккаунта"
              >
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Profile;