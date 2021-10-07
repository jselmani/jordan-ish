import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpStart, emailSignInStart } from "../redux/user/user.actions";

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

    if (type === "sign-up") {
      setSignUpCreds({
        ...signUpCreds,
        [name]: value,
      });
    } else if (type === "sign-in") {
      setSignInCreds({
        ...signInCreds,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errorCheck;

    if (type === "sign-up") {
      errorCheck = validateCredentials(signUpCreds, type);
    } else if (type === "sign-in") {
      errorCheck = validateCredentials(signInCreds, type);
    }

    setErrors(errorCheck);

    if (Object.keys(errorCheck).length === 0) {
      if (type === "sign-up") {
        dispatch(signUpStart({ signUpEmail, signUpPassword, displayName }));
      } else if (type === "sign-in") {
        dispatch(emailSignInStart({ signInEmail, signInPassword }));
      }
    }
  };

  return { handleSubmit, handleChange, signUpCreds, signInCreds, errors };
};

export default useForm;
