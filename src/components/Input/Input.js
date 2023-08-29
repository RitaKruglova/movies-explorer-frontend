function Input(labelText, inputType, idAndForValue, inputValue) {
  return (
    <div className="field">
      <label className="field__label" for={idAndForValue}>{labelText}</label>
      <input
      className="field__input"
      value={inputValue}
      type={inputType}
      id={idAndForValue}
      />
      <span className="field__error"></span>
    </div>
  )
}

export default Input;