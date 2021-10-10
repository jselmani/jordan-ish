import React, { useState } from "react";

import "./Modal.styles.scss";
import SignIn from "../SignIn/SignIn.component";
import SignUp from "../SignUp/SignUp.component";

const Modal = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="modal">
      {isSignIn ? (
        <SignIn isModal={true} handleClick={handleClick} />
      ) : (
        <SignUp isModal={true} handleClick={handleClick} />
      )}
    </div>
  );
};

export default Modal;
