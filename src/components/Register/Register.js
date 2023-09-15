import { validateText, validateEmail, validatePassword } from '../../utils/validation';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import useValidate from '../../hooks/useValidate';
import { register } from '../../utils/auth';
import { useNavigate } from 'react-router';
import { useState } from 'react';

function Register() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const NAME = 'name';
  const EMAIL = 'email';
  const PASSWORD = 'password';

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

    register(values[NAME], values[EMAIL], values[PASSWORD])
      .then(() => navigate('/signin', {replace: true}))
      .catch(err => {
        if (err.statusCode === 400) {
          setMessage('Пользователь с таким email уже существует.');
        } else {
          setMessage('При регистрации пользователя произошла ошибка.');
        }
      })
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