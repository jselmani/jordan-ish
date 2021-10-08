import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpStart, emailSignInStart } from "../redux/user/user.actions";

export const FormTypes = {
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP",
};

const useForm = (validateCredentials, type) => {
  const dispatch = useDispatch();
  const [signUpCreds, setSignUpCreds] = useState({
    displayName: "",
    signUpEmail: "",
    signUpPassword: "",
    signUpConfirmPassword: "",
  });

  const [signInCreds, setSignInCreds] = useState({
    signInEmail: "",
    signInPassword: "",
  });

  const { displayName, signUpEmail, signUpPassword } = signUpCreds;
  const { signInEmail, signInPassword } = signInCreds;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (type === FormTypes.SIGN_UP) {
      setSignUpCreds({
        ...signUpCreds,
        [name]: value,
      });
    } else if (type === FormTypes.SIGN_IN) {
      setSignInCreds({
        ...signInCreds,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errorCheck;

    if (type === FormTypes.SIGN_UP) {
      errorCheck = validateCredentials(signUpCreds, type);
    } else if (type === FormTypes.SIGN_IN) {
      errorCheck = validateCredentials(signInCreds, type);
    }

    setErrors(errorCheck);

    if (Object.keys(errorCheck).length === 0) {
      if (type === FormTypes.SIGN_UP) {
        dispatch(signUpStart({ signUpEmail, signUpPassword, displayName }));
      } else if (type === FormTypes.SIGN_IN) {
        dispatch(emailSignInStart({ signInEmail, signInPassword }));
      }
    }
  };

  return { handleSubmit, handleChange, signUpCreds, signInCreds, errors };
};

export default useForm;
