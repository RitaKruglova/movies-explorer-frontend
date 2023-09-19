import { useContext, useState } from 'react';
import useValidate from '../../hooks/useValidate';
import { validateEmail, validatePassword } from '../../utils/validation';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import { IsSubmittingContext } from '../../contexts/IsSubmittingContext';

function Login({ handleLoginSubmit }) {
  const { setIsSubmitting } = useContext(IsSubmittingContext);
  const [message, setMessage] = useState('');

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

    setIsSubmitting(false);

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