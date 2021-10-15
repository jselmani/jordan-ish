import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";

import jordanLogoBlack from "../../images/jordan-logo-black.png";

import "./SignUp.styles.scss";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

import useForm, { FormTypes } from "../../hooks/useForm";
import validateCredentials from "../../helpers/validateCredentials";

import { toggleModalHidden, clearErrors } from "../../redux/user/user.actions";
import { selectErrorMessage } from "../../redux/user/user.selectors";

const SignUp = ({ handleClick, isModal }) => {
  const dispatch = useDispatch();
  const signInError = useSelector(selectErrorMessage);
  const type = FormTypes.SIGN_UP;

  useEffect(() => {
    if (signInError) {
      setTimeout(() => {
        dispatch(clearErrors());
      }, 3000);
    }
  }, [dispatch, signInError]);

  const { handleChange, signUpCreds, handleSubmit, errors } = useForm(
    validateCredentials,
    type
  );

  const { displayName, signUpEmail, signUpPassword, signUpConfirmPassword } =
    signUpCreds;

  return (
    <div className="sign-up">
      {isModal && (
        <div
          className="sign-up-close-modal"
          onClick={() => dispatch(toggleModalHidden())}
        >
          <FaTimes className="close-button" />
        </div>
      )}
      <div className="sign-up-logo">
        <img src={jordanLogoBlack} alt="Jordan Logo" />
      </div>
      <h1 className="sign-up-title">BECOME A JORDAN MEMBER</h1>
      <span className="sign-up-subtitle">
        Create your Jordan Member profile and get first access to the very best
        of Jordan products, inspiration, and community.
      </span>
      {signInError && (
        <span className="sign-up-error" style={{ margin: "0.5rem 0" }}>
          {signInError}
        </span>
      )}
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        {errors.displayName && (
          <span className="sign-up-error">{errors.displayName}</span>
        )}
        <FormInput
          name="signUpEmail"
          type="email"
          value={signUpEmail}
          onChange={handleChange}
          label="Email"
          required
        />
        {errors.signUpEmail && (
          <span className="sign-up-error">{errors.signUpEmail}</span>
        )}
        <FormInput
          name="signUpPassword"
          type="password"
          value={signUpPassword}
          onChange={handleChange}
          label="Password"
          required
        />
        {errors.signUpPassword && (
          <span className="sign-up-error">{errors.signUpPassword}</span>
        )}
        <FormInput
          name="signUpConfirmPassword"
          type="password"
          value={signUpConfirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        {errors.signUpConfirmPassword && (
          <span className="sign-up-error">{errors.signUpConfirmPassword}</span>
        )}
        <div className="button-container">
          <CustomButton type="submit" maxWidth onClick={handleSubmit}>
            SIGN UP
          </CustomButton>
        </div>
      </form>
      <div className="sign-in-container">
        <span className="sign-in-subtitle">Have an account?</span>
        <span className="sign-in-link" onClick={handleClick}>
          SIGN IN
        </span>
      </div>
    </div>
  );
};

export default SignUp;
