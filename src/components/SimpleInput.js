import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    handleValueChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    handleValueChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={handleSubmit}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Please enter a name!</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid e-mail!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
