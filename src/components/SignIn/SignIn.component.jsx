import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";

import jordanLogoBlack from "../../images/jordan-logo-black.png";

import "./SignIn.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";
import FormInput from "../FormInput/FormInput.component";

import useForm, { FormTypes } from "../../hooks/useForm";
import validateCredentials from "../../helpers/validateCredentials";

import { toggleModalHidden } from "../../redux/user/user.actions";
import { selectErrorMessage } from "../../redux/user/user.selectors";

const SignIn = ({ handleClick, isModal }) => {
  const dispatch = useDispatch();
  const signInError = useSelector(selectErrorMessage);
  const type = FormTypes.SIGN_IN;

  const { handleChange, signInCreds, handleSubmit, errors } = useForm(
    validateCredentials,
    type
  );

  const { signInEmail, signInPassword } = signInCreds;

  return (
    <div className="sign-in">
      {isModal && (
        <div
          className="sign-in-close-modal"
          onClick={() => dispatch(toggleModalHidden())}
        >
          <FaTimes className="close-button" />
        </div>
      )}
      <div className="sign-in-logo">
        <img src={jordanLogoBlack} alt="Jordan Logo" />
      </div>
      <h1 className="sign-in-title">WELCOME BACK</h1>
      <span className="sign-in-subtitle">
        Sign in with your email and password
      </span>
      {signInError && (
        <span className="sign-in-error" style={{ margin: "0.5rem 0" }}>
          {signInError}
        </span>
      )}
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
