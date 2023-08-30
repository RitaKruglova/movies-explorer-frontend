import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import AuthorizationPrompt from "../AuthorizationPrompt/AuthorizationPrompt";
import SubmitButton from "../SubmitButton/SubmitButton";

function AuthenticationForm({isRegisterPlace, titleText}) {
  return (
    <div className="authentication">
      <Logo />
      <h2 className="authentication__title">{titleText}</h2>
      <form className="authentication__form">
        {isRegisterPlace &&
          <Input labelText="Имя" inputType="text" idAndForValue="name-input-auth" inputValue="Рита" placeholderValue="Имя" />
        }
        <Input labelText="E-mail" inputType="email" idAndForValue="email-input-auth" inputValue="kruglova404@yandex.ru" placeholderValue="E-mail" />
        <Input labelText="Пароль" inputType="password" idAndForValue="password-input-auth" inputValue="123456789" placeholderValue="Пароль" />
        <div className="authentication__button-container">
          <SubmitButton buttonText={isRegisterPlace ? "Зарегистрироваться" : "Войти"} buttonClass={isRegisterPlace ? "" : " submit-button_place_login"} />
          {isRegisterPlace
            ?
              <AuthorizationPrompt paragraphText="Уже зарегистрированы?" linkPath="/signin" linkText="Войти" />
            :
              <AuthorizationPrompt paragraphText="Ещё не зарегистрированы?" linkPath="/signup" linkText="Регистрация" />
          }
        </div>
      </form>
    </div>
  )
}

export default AuthenticationForm;