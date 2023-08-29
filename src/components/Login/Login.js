import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";

function Login() {
  return (
    <section className="login">
      <AuthenticationForm isRegisterPlace={false} titleText="Рады видеть!" />
    </section>
  )
}

export default Login;