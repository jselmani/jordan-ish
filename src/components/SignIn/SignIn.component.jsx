import React, { useState } from "react";

import jordanLogoBlack from "../../images/jordan-logo-black.png";

import "./SignIn.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";
import FormInput from "../FormInput/FormInput.component";

const SignIn = ({ handleClick }) => {
  const [userCreds, setUserCreds] = useState({ email: "", password: "" });

  const { email, password } = userCreds;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCreds({ ...userCreds, [name]: value });
  };

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
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <div className="button-container">
          <CustomButton type="submit" style={{ width: "100%" }}>
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
