import React, { useState } from "react";

import "./SignInSignUp.styles.scss";
import SignIn from "../../components/SignIn/SignIn.component";

const SignInSignUpPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="sign-in-sign-up-page">
      <SignIn handleClick={handleClick} />
    </div>
  );
};

export default SignInSignUpPage;
