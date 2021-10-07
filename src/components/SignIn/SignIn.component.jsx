import React from "react";

import jordanLogoBlack from "../../images/jordan-logo-black.png";

import "./SignIn.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";
import FormInput from "../FormInput/FormInput.component";

import useForm from "../../hooks/useForm";
import validateCredentials from "../../helpers/validateCredentials";

const SignIn = ({ handleClick }) => {
  const type = "sign-in";

  const { handleChange, signInCreds, handleSubmit, errors } = useForm(
    validateCredentials,
    type
  );

  const { signInEmail, signInPassword } = signInCreds;

  return (
    <div className="sign-in">
      <div className="sign-in-logo">
        <img src={jordanLogoBlack} alt="Jordan Logo" />
      </div>
      <h1 className="sign-in-title">WELCOME BACK</h1>
      <span className="sign-in-subtitle">
        Sign in with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="signInEmail"
          type="email"
          value={signInEmail}
          onChange={handleChange}
          label="Email"
          required
        />
        {errors.signInEmail && (
          <span className="sign-in-error">{errors.signInEmail}</span>
        )}
        <FormInput
          name="signInPassword"
          type="password"
          value={signInPassword}
          onChange={handleChange}
          label="Password"
          required
        />
        {errors.signInPassword && (
          <span className="sign-in-error">{errors.signInPassword}</span>
        )}
        <div className="button-container">
          <CustomButton
            type="submit"
            style={{ width: "100%" }}
            onClick={handleSubmit}
          >
            SIGN IN
          </CustomButton>
        </div>
      </form>
      <div className="sign-up-container">
        <span className="sign-up-subtitle">Don't have an account?</span>
        <span className="sign-up-link" onClick={handleClick}>
          JOIN US
        </span>
      </div>
    </div>
  );
};

export default SignIn;
