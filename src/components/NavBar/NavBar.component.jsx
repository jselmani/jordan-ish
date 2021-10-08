import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

import jordanLogo from "../../images/jordan-logo-white.png";

import "./NavBar.styles.scss";
import CartIcon from "../CartIcon/CartIcon.component";

import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import useViewport from "../../hooks/useViewport";

const LargeScreenNavBar = ({ currentUser, dispatch }) => {
  return (
    <div className="navbar">
      <Link className="logo-container" to="/">
        <img src={jordanLogo} alt="jordan logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          <span>SHOP</span>
        </Link>
        <Link className="option" to="/">
          <span>ABOUT</span>
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => dispatch(signOutStart())}>
            <span>SIGN OUT</span>
          </div>
        ) : (
          <Link className="option" to="/signin">
            <span>SIGN IN</span>
          </Link>
        )}
        <Link className="option" to="/checkout">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

const SmallScreenNavBar = ({ currentUser, dispatch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    isOpen
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };

  const handleSignOut = () => {
    dispatch(signOutStart());
    setIsOpen(!isOpen);
  };

  const iconVariants = {
    closed: {
      rotate: 180,
    },
    opened: {
      rotate: 360,
    },
  };

  return (
    <div className="navbar">
      <Link className="logo-container" to="/">
        <img src={jordanLogo} alt="jordan logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/checkout">
          <CartIcon />
        </Link>
        <motion.div
          className="option"
          onClick={handleClick}
          initial={false}
          animate={isOpen ? "opened" : "closed"}
          variants={iconVariants}
        >
          {isOpen ? (
            <FaTimes className="menu-icon" />
          ) : (
            <FaBars className="menu-icon" />
          )}
        </motion.div>
      </div>
      <motion.div
        className="menu-list"
        initial={false}
        animate={isOpen ? { y: 0 } : { y: "100%" }}
        transition={{
          ease: "easeInOut",
          duration: 0.25,
        }}
      >
        <Link className="menu-list-item" to="/shop" onClick={handleClick}>
          <span>SHOP</span>
        </Link>
        <Link className="menu-list-item" to="/" onClick={handleClick}>
          <span>ABOUT</span>
        </Link>
        {currentUser ? (
          <div className="menu-list-item" onClick={handleSignOut}>
            <span>SIGN OUT</span>
          </div>
        ) : (
          <Link className="menu-list-item" to="/signin" onClick={handleClick}>
            <span>SIGN IN</span>
          </Link>
        )}
      </motion.div>
    </div>
  );
};

const NavBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const width = useViewport();
  const breakpoint = 900;

  return width > breakpoint ? (
    <LargeScreenNavBar currentUser={currentUser} dispatch={dispatch} />
  ) : (
    <SmallScreenNavBar currentUser={currentUser} dispatch={dispatch} />
  );
};

export default NavBar;
