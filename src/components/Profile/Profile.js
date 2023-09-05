import Header from "../Header/Header";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { mainApi } from "../../utils/MainApi";

function Profile({toggleMenuVisibility, isDropdownMenuOpen}) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const NAME = 'name';
  const EMAIL = 'email';
  const [values, setValues] = useState({
    [NAME]: currentUser.name,
    [EMAIL]: currentUser.email
  });

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  useEffect(() => {
    setValues({
      [NAME]: currentUser.name,
      [EMAIL]: currentUser.email
    })
  }, [currentUser]);

  function handleSubmit(event) {
    event.preventDefault();

    mainApi.changeUserInfo({
      [NAME]: values.name,
      [EMAIL]: values.email
    })
      .then(data => {
        setCurrentUser(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <>
      <Header isAccountButtonWhite={true} toggleMenuVisibility={toggleMenuVisibility} isDropdownMenuOpen={isDropdownMenuOpen} />
      <section className="profile">
        <AuthenticationForm
          isRegisterPlace={false}
          isProfilePlace={true}
          titleText={`Привет, ${currentUser.name}`}
          buttonText="Сохранить"
          values={values}
          errors={{}}
          handleChange={handleChange}
          isValidForm={true}
          handleSubmit={handleSubmit}
        />
      </section>
    </>
  )
}

export default Profile;