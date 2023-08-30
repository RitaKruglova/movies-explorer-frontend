function Input({labelText, inputType, idAndForValue, inputValue, placeholderValue}) {
  return (
    <div className="field">
      <label className="field__label" for={idAndForValue}>{labelText}</label>
      <input
      className="field__input"
      value={inputValue}
      type={inputType}
      id={idAndForValue}
      placeholder={placeholderValue}
      />
      <span className="field__error">Что-то пошло не так...</span>
    </div>
  )
}

export default Input;