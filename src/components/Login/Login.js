import useValidate from '../../hooks/useValidate';
import { validateEmail, validatePassword } from '../../utils/validation';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';

function Login() {
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
      />
    </section>
  )
}

export default Login;