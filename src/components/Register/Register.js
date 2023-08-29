import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";

function Register() {
  return (
    <section className="register">
      <AuthenticationForm isRegisterPlace={true} titleText="Добро пожаловать!" />
    </section>
  )
}

export default Register;