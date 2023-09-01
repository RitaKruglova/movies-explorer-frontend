function AuthenticationInput({isProfilePlace, isEditingAvailable, forAndIdValue, placeholderValue, inputType, inputValue, errorValue, handleChange, inputName}) {
  return (
    <div className={`authentication__input-container${isProfilePlace ? " authentication__input-container_place_profile"  : ""}`}>
      <label className={`authentication__label${isProfilePlace ? " authentication__label_place_profile" : ""}`} htmlFor={forAndIdValue}>{placeholderValue}</label>
      <input
        className={`authentication__input${isProfilePlace ? " authentication__input_place_profile" : ""}`}
        value={inputValue}
        type={inputType}
        id={forAndIdValue}
        placeholder={placeholderValue}
        disabled={!isEditingAvailable}
        onChange={handleChange}
        name={inputName}
        required
      />
      {!isProfilePlace
        &&
        <span className="authentication__error">{errorValue}</span>
      }
    </div>
  )
}

export default AuthenticationInput;