import { validateText, validateEmail, validatePassword } from '../../utils/validation';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import useValidate from '../../hooks/useValidate';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { NAME, EMAIL, PASSWORD } from '../../constants/constants';

function Register({ handleRegisterSubmit }) {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { loggedIn } = useContext(LoggedInContext);

  useEffect(() => {
    if (loggedIn) {
      navigate('/movies');
    }
  }, []);

  function getErrorsByValues(values) {
    const errors ={}
    const nameError = validateText(values[NAME]);
    const emailError = validateEmail(values[EMAIL]);
    const passwordError = validatePassword(values[PASSWORD]);

    if (nameError) {
      errors[NAME] = nameError;
    }

    if (emailError) {
      errors[EMAIL] = emailError;
    }

    if (passwordError) {
      errors[PASSWORD] = passwordError;
    }

    return errors;
  }

  const { values, errors, handleChange, isValidForm } = useValidate({
    [NAME]: '',
    [EMAIL]: '',
    [PASSWORD]: ''
  }, getErrorsByValues);

  function handleSubmit(event) {
    event.preventDefault();

    handleRegisterSubmit(values[NAME], values[EMAIL], values[PASSWORD], { setMessage });
  }

  return (
    <section className="register">
      <AuthenticationForm
        isRegisterPlace={true}
        titleText="Добро пожаловать!"
        isProfilePlace={false}
        buttonText="Зарегистрироваться"
        values={values}
        errors={errors}
        handleChange={handleChange}
        isValidForm={isValidForm}
        message={message}
        handleSubmit={handleSubmit}
      />
    </section>
  )
}

export default Register;