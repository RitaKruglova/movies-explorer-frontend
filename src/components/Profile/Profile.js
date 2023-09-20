import Header from "../Header/Header";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { validateEmail, validateText } from "../../utils/validation";
import { IsSubmittingContext } from "../../contexts/IsSubmittingContext";
import { NAME, EMAIL } from "../../constants/constants";

function Profile({ toggleMenuVisibility, isDropdownMenuOpen, handleProfileSubmit }) {
  const { setIsSubmitting } = useContext(IsSubmittingContext);
  const { currentUser } = useContext(CurrentUserContext);
  const [message, setMessage] = useState('');
  const [isEditingAvailable, setIsEditingAvailable] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [values, setValues] = useState({
    [NAME]: currentUser.name,
    [EMAIL]: currentUser.email
  });
  const [isValidForm, setIsValidForm] = useState(true);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  useEffect(() => {
    if (currentUser.email === values.email && currentUser.name === values.name) {
      setIsValidForm(false)
    } else {
      if (validateEmail(values.email) || validateText(values.name)) {
        setIsValidForm(false);
      } else {
        setIsValidForm(true);
      }
    }
  }, [values]);

  useEffect(() => {
    setValues({
      [NAME]: currentUser.name,
      [EMAIL]: currentUser.email
    })
  }, [currentUser]);

  function handleSubmit(event) {
    event.preventDefault();

    handleProfileSubmit({
      [NAME]: values.name,
      [EMAIL]: values.email
    }, {
      setIsSuccess,
      setMessage
    });
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
          isValidForm={isValidForm}
          handleSubmit={handleSubmit}
          message={message}
          isEditingAvailable={isEditingAvailable}
          setIsEditingAvailable={setIsEditingAvailable}
          isSuccess={isSuccess}
        />
      </section>
    </>
  )
}

export default Profile;