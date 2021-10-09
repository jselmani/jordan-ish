import React, { useState } from "react";

import "./SignInSignUp.styles.scss";
import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

const SignInSignUpPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="sign-in-sign-up-page">
      {isSignIn ? (
        <SignIn isModal={false} handleClick={handleClick} />
      ) : (
        <SignUp isModal={false} handleClick={handleClick} />
      )}
    </div>
  );
};

export default SignInSignUpPage;
