import { FormTypes } from "../hooks/useForm";

export default function validateCredentials(credentials, type) {
  let errors = {};

  if (type === FormTypes.SIGN_UP) {
    if (!credentials.displayName.trim()) {
      errors.displayName = "Display name required";
    }

    if (!credentials.signUpEmail) {
      errors.signUpEmail = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(credentials.signUpEmail)) {
      errors.signUpEmail = "Email address is invalid";
    }

    if (!credentials.signUpPassword) {
      errors.signUpPassword = "Password is required";
    } else if (credentials.signUpPassword.length < 8) {
      errors.signUpPassword = "Password must be longer than 8 characters";
    }

    if (!credentials.signUpConfirmPassword) {
      errors.signUpConfirmPassword = "Password is required";
    } else if (
      credentials.signUpConfirmPassword !== credentials.signUpPassword
    ) {
      errors.signUpConfirmPassword = "Passwords do not match";
    }
  } else if (type === FormTypes.SIGN_IN) {
    if (!credentials.signInEmail) {
      errors.signInEmail = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(credentials.signInEmail)) {
      errors.signInEmail = "Email address is invalid";
    }

    if (!credentials.signInPassword) {
      errors.signInPassword = "Password is required";
    } else if (credentials.signInPassword.length < 8) {
      errors.signInPassword = "Password must be longer than 8 characters";
    }
  }

  return errors;
}
