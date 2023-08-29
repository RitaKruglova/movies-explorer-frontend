import Header from "../Header/Header";

function Profile({toggleMenuVisibility, isDropdownMenuOpen}) {
  return (
    <>
      <Header isAccountButtonWhite={true} toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen} />
      <section className="profile">
        <h2 className="profile__title">Привет, Рита!</h2>
        <form className="profile__form">
          <div className="profile__input-container">
            <label className="profile__label" for="name-input">Имя</label>
            <input className="profile__input" id="name-input" value="Рита" />
          </div>
          <div className="profile__input-container">
            <label className="profile__label" for="email-input">E-mail</label>
            <input className="profile__input" id="email-input" value="kruglova404@yandex.ru" />
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
      </section>
    </>
  )
}

export default Profile;