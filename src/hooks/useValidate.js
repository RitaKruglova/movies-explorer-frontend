import { useState, useEffect } from "react";

export default function useValidate(initialState, getErrorsByValues) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isValidForm, setIsValidForm] = useState(false);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  useEffect(() => {
    if (values !== initialState) {
      setErrors(getErrorsByValues(values));
    }
  }, [values]);

  useEffect(() => {
    if (values !== initialState) {
      const errorsArray = Object.values(errors);
      setIsValidForm(errorsArray.every((error) => error === ''))
    }
  }, [errors]);

  return {
    values,
    errors,
    handleChange,
    isValidForm
  };
}


