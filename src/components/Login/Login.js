import { useContext, useState } from 'react';
import useValidate from '../../hooks/useValidate';
import { login } from '../../utils/auth';
import { validateEmail, validatePassword } from '../../utils/validation';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { useNavigate } from 'react-router';

function Login() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const { setLoggedIn } = useContext(LoggedInContext);
  const { setCurrentUser } = useContext(CurrentUserContext);

  const EMAIL = 'email';
  const PASSWORD = 'password';

  function getErrorsByValues(values) {
    const errors ={}
    const emailError = validateEmail(values[EMAIL]);
    const passwordError = validatePassword(values[PASSWORD]);

    if (emailError) {
      errors[EMAIL] = emailError;
    }

    if (passwordError) {
      errors[PASSWORD] = passwordError;
    }

    return errors;
  }

  const { values, errors, handleChange, isValidForm } = useValidate({
    [EMAIL]: '',
    [PASSWORD]: ''
  }, getErrorsByValues);

  function handleSubmit(event) {
    event.preventDefault();

    login(values[EMAIL], values[PASSWORD])
      .then(() => {
        mainApi.getCurrentUser()
          .then(data => {
            setCurrentUser(data);
            setLoggedIn(true);
            navigate('/movies', {replace: true});
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        if (err.statusCode === 400) {
          setMessage('Вы ввели неправильный логин или пароль.')
        } else if (err.statusCode === 401) {
          setMessage(' При авторизации произошла ошибка. Токен не передан или передан не в том формате.')
        } else {
          setMessage('При авторизации произошла ошибка. Переданный токен некорректен.')
        }
      })
  }

  return (
    <section className="login">
      <AuthenticationForm
        isRegisterPlace={false}
        titleText="Рады видеть!"
        isProfilePlace={false}
        buttonText="Войти"
        values={values}
        errors={errors}
        handleChange={handleChange}
        isValidForm={isValidForm}
        handleSubmit={handleSubmit}
        message={message}
      />
    </section>
  )
}

export default Login;