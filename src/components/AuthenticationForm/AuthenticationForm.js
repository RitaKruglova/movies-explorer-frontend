import Logo from "../Logo/Logo";
import AuthorizationPrompt from "../AuthorizationPrompt/AuthorizationPrompt";
import { useContext } from "react";
import AuthenticationInput from "../AuthenticationInput/AuthenticationInput";
import { logout } from "../../utils/auth";
import { LoggedInContext } from "../../contexts/LoggedInContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function AuthenticationForm({isRegisterPlace, titleText, isProfilePlace, buttonText, values, errors, handleChange, isValidForm, message, handleSubmit, isEditingAvailable, setIsEditingAvailable, isSuccess}) {
  
  const { setLoggedIn } = useContext(LoggedInContext);
  const { setCurrentUser } = useContext(CurrentUserContext);

  function allowEditing(event) {
    event.preventDefault()
    setIsEditingAvailable(true);
  }

  function handleSignoutClick() {
    logout()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.removeItem('searchInput');
        localStorage.removeItem('foundMovies');
        localStorage.removeItem('checkbox');
      })
      .catch(err => console.log(err));
  }
  
  return (
    <div className={`authentication${isProfilePlace ? " authentication_place_profile" : ""}`}>
      {!isProfilePlace && <Logo />}
      <h2 className={`authentication__title${isProfilePlace ? " authentication__title_place_profile" : ""}`}>{titleText}</h2>
      <form
        className={`authentication__form${isProfilePlace ? " authentication__form_place_profile" : ""}`}
        onSubmit={handleSubmit}
      >
        <div className="authentication__container">
          {(isRegisterPlace || isProfilePlace) &&
            <AuthenticationInput
              isProfilePlace={isProfilePlace}
              isEditingAvailable={isProfilePlace ? isEditingAvailable : true}
              forAndIdValue="name"
              placeholderValue="Имя"
              inputType="text"
              inputValue={values.name || ''}
              errorValue={errors.name}
              handleChange={handleChange}
              inputName="name"
            />
          }
          <AuthenticationInput
            isProfilePlace={isProfilePlace}
            isEditingAvailable={isProfilePlace ? isEditingAvailable : true}
            forAndIdValue="email"
            placeholderValue="E-mail"
            inputType="email"
            inputValue={values.email || ''}
            errorValue={errors.email}
            handleChange={handleChange}
            inputName="email"
          />
          {!isProfilePlace
            &&
            <AuthenticationInput
              isProfilePlace={isProfilePlace}
              isEditingAvailable={true}
              forAndIdValue="password"
              placeholderValue="Пароль"
              inputType="password"
              inputValue={values.password}
              errorValue={errors.password}
              handleChange={handleChange}
              inputName="password"
            />
          }
        </div>
        {isProfilePlace && !isEditingAvailable
          ?
            <div className="authentication__profile-button-container">
              <button
                className="authentication__profile-button"
                type="button"
                aria-label="Редактировать информацию профиля"
                onClick={allowEditing}
              >
                Редактировать
              </button>
              <button 
                className="authentication__profile-button authentication__profile-button_type_signout"
                type="button"
                aria-label="Выйти из аккаунта"
                onClick={handleSignoutClick}
              >
                Выйти из аккаунта
              </button>
            </div>
          :
          <div className={`authentication__button-container${isProfilePlace ? " authentication__button-container_place_profile" : ""}${isRegisterPlace ? " authentication__button-container_place_register" : ""}`}>
            <span className={`authentication__message${isProfilePlace && isSuccess ? " authentication__message_color_black" : ""}`}>{message}</span>
            <button
              type="submit"
              className={`authentication__submit-button${isProfilePlace ? " authentication__submit-button_place_profile" : ""}${isRegisterPlace ? " authentication__submit-button_place_register" : ""}`}
              disabled={!isValidForm}
            >
              {buttonText}
            </button>
              {!isProfilePlace &&
                <>
                  {isRegisterPlace
                    ?
                      <AuthorizationPrompt paragraphText="Уже зарегистрированы?" linkPath="/signin" linkText="Войти" />
                    :
                      <AuthorizationPrompt paragraphText="Ещё не зарегистрированы?" linkPath="/signup" linkText="Регистрация" />
                  }
                </>
              }
          </div>
        }
        
      </form>
    </div>
  )
}

export default AuthenticationForm;