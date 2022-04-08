import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const handleValueChange = (e) => {
    setEnteredValue(e.target.value);
  };

  const handleInputBlur = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    IsValid: valueIsValid,
    hasError: hasError,
    handleValueChange,
    handleInputBlur,
    reset,
  };
};

export default useInput;
