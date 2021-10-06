import React from "react";

import jordanLogoBlack from "../../images/jordan-logo-black.png";

import "./SignUp.styles.scss";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

import useForm from "../../hooks/useForm";
import validateCredentials from "../../helpers/validateCredentials";

const SignUp = ({ handleClick }) => {
  const { handleChange, userCreds, handleSubmit, errors } =
    useForm(validateCredentials);
  const { displayName, email, password, confirmPassword } = userCreds;

  return (
    <div className="sign-up">
      <div className="sign-up-logo">
        <img src={jordanLogoBlack} alt="Jordan Logo" />
      </div>
      <h1 className="sign-up-title">BECOME A JORDAN MEMBER</h1>
      <span className="sign-up-subtitle">
        Create your Jordan Member profile and get first access to the very best
        of Jordan products, inspiration, and community.
      </span>
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
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        {errors.email && <span className="sign-up-error">{errors.email}</span>}
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        {errors.password && (
          <span className="sign-up-error">{errors.password}</span>
        )}
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        {errors.confirmPassword && (
          <span className="sign-up-error">{errors.confirmPassword}</span>
        )}
        <div className="button-container">
          <CustomButton
            type="submit"
            style={{ width: "100%" }}
            onClick={handleSubmit}
          >
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
