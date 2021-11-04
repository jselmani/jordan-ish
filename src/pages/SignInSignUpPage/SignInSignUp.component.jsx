import React, { useState } from "react";
import { motion } from "framer-motion";

import "./SignInSignUp.styles.scss";
import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

const SignInSignUpPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="sign-in-sign-up-page"
    >
      {isSignIn ? (
        <SignIn isModal={false} handleClick={handleClick} />
      ) : (
        <SignUp isModal={false} handleClick={handleClick} />
      )}
    </motion.div>
  );
};

export default SignInSignUpPage;
