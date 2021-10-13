import React, { useState } from "react";

import "./Modal.styles.scss";
import SignIn from "../SignIn/SignIn.component";
import SignUp from "../SignUp/SignUp.component";

import { ModalFlow } from "../../helpers/ModalFlow";

const Modal = ({ modalFlow }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };

  switch (modalFlow) {
    case ModalFlow.SIGN_IN_UP_FLOW:
      return (
        <div className="modal">
          {isSignIn ? (
            <SignIn isModal={true} handleClick={handleClick} />
          ) : (
            <SignUp isModal={true} handleClick={handleClick} />
          )}
        </div>
      );
    case ModalFlow.FAVOURITE_FLOW:
      return (
        <div className="modal">{console.log("Select Shoe Size Modal")}</div>
      );
    default:
      return <div />;
  }
};

export default Modal;
