import Header from "../Header/Header";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import { useState } from "react";

function Profile({toggleMenuVisibility, isDropdownMenuOpen}) {
  const NAME = 'name';
  const EMAIL = 'email';

  const [values, setValues] = useState({
    [NAME]: 'Рита',
    [EMAIL]: 'kruglova404@yandex.ru'
  })
  
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  return (
    <>
      <Header isAccountButtonWhite={true} toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen} />
      <section className="profile">
        <AuthenticationForm
          isRegisterPlace={false}
          isProfilePlace={true}
          titleText="Привет, Рита"
          buttonText="Сохранить"
          values={values}
          errors={{}}
          handleChange={handleChange}
          isValidForm={true}
        />
      </section>
    </>
  )
}

export default Profile;