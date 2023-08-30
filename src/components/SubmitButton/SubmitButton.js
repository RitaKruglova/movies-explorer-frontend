function SubmitButton({buttonText, buttonClass}) {
  return (
    <button
      type="submit"
      className={`submit-button${buttonClass}`}
    >
      {buttonText}
    </button>
  )
}

export default SubmitButton;