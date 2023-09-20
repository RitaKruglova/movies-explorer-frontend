import { useContext, useEffect, useState } from 'react';
import useValidate from '../../hooks/useValidate';
import { validateEmail, validatePassword } from '../../utils/validation';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { useNavigate } from 'react-router-dom';
import { EMAIL, PASSWORD } from '../../constants/constants';

function Login({ handleLoginSubmit }) {
  const { loggedIn } = useContext(LoggedInContext);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate('/movies');
    }
  }, []);

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

    handleLoginSubmit(values[EMAIL], values[PASSWORD], {
      setMessage
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