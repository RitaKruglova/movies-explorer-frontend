import Header from "../Header/Header";

function Profile() {
  return (
    <section className="profile">
      <Header isAccountButtonWhite={true} />
      <h2 className="pofile__title">Привет, Рита!</h2>
      <form className="profile__form">
        <div className="profile__input-container">
          <label className="profile__label" for="name-input">Имя</label>
          <input className="profile__input" id="name-input" value="Рита" />
        </div>
        <div className="profile__input-container">
          <label className="profile__label" for="email-input">E-mail</label>
          <input className="profile__input" id="email-input" value="kruglova404@yandex.ru" />
        </div>
        <button
          className="profile__edit-button"
          type="submit"
          aria-label="Редактировать информацию профиля"
        >
          Редактировать
        </button>
        <button 
          className="profile__signout-button"
          type="button"
          aria-label="Выйти из аккаунта"
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  )
}

export default Profile;