import Header from "../Header/Header";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { mainApi } from "../../utils/MainApi";
import { validateEmail, validateText } from "../../utils/validation";

function Profile({toggleMenuVisibility, isDropdownMenuOpen}) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [message, setMessage] = useState('');
  const [isEditingAvailable, setIsEditingAvailable] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const NAME = 'name';
  const EMAIL = 'email';
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
    if (validateEmail(values.email) || validateText(values.name)) {
      setIsValidForm(false);
    } else {
      setIsValidForm(true);
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

    mainApi.changeUserInfo({
      [NAME]: values.name,
      [EMAIL]: values.email
    })
      .then(data => {
        setCurrentUser(data);
      })
      .then(() => {
        setIsSuccess(true);
        setMessage('Данные успешно сохранены');
      })
      .catch(err => {
        if (err.statusCode === 400) {
          setMessage('Пользователь с таким email уже существует.');
        } else {
          setMessage('При обновлении профиля произошла ошибка.');
        }
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