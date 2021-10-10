import React, { useState } from "react";

import "./Modal.styles.scss";
import SignIn from "../SignIn/SignIn.component";
import SignUp from "../SignUp/SignUp.component";

const Modal = ({ handleModalClick }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="modal">
      <div className="modal-container">
        {isSignIn ? (
          <SignIn
            isModal={true}
            handleModalClick={handleModalClick}
            handleClick={handleClick}
          />
        ) : (
          <SignUp
            isModal={true}
            handleModalClick={handleModalClick}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
