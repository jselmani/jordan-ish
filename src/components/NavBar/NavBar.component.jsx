import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

import jordanLogo from "../../images/jordan-logo-white.png";

import "./NavBar.styles.scss";
import CartIcon from "../CartIcon/CartIcon.component";
import FavouriteIcon from "../FavouriteIcon/FavouriteIcon.component";
import Modal from "../Modal/Modal.component";

import { signOutStart, toggleModalHidden } from "../../redux/user/user.actions";
import {
  selectCurrentUser,
  selectShowModal,
} from "../../redux/user/user.selectors";
import useViewport from "../../hooks/useViewport";

const LargeScreenNavBar = ({ currentUser, dispatch, showModal }) => {
  const handleSignOut = () => {
    dispatch(signOutStart());
  };

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
          <div className="option" onClick={handleSignOut}>
            <span>SIGN OUT</span>
          </div>
        ) : (
          <Link className="option" to="/signin">
            <span>SIGN IN</span>
          </Link>
        )}
        {currentUser ? (
          <Link className="option" to="/favourites">
            <FavouriteIcon currentUser={currentUser} />
          </Link>
        ) : (
          <div className="option" onClick={() => dispatch(toggleModalHidden())}>
            <FavouriteIcon currentUser={currentUser} />
          </div>
        )}
        <Link className="option" to="/checkout">
          <CartIcon />
        </Link>
      </div>
      {showModal && <Modal />}
    </div>
  );
};

const SmallScreenNavBar = ({ currentUser, dispatch, showModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    isMenuOpen
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };

  const handleSignOut = () => {
    dispatch(signOutStart());
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
      {showModal && <Modal />}
      <div className="options">
        {currentUser ? (
          <Link className="option" to="/favourites">
            <FavouriteIcon currentUser={currentUser} />
          </Link>
        ) : (
          <div className="option" onClick={() => dispatch(toggleModalHidden())}>
            <FavouriteIcon currentUser={currentUser} />
          </div>
        )}
        <Link className="option" to="/checkout">
          <CartIcon />
        </Link>
        <motion.div
          className="option"
          onClick={handleMenuClick}
          initial={false}
          animate={isMenuOpen ? "opened" : "closed"}
          variants={iconVariants}
        >
          {isMenuOpen ? (
            <FaTimes className="menu-icon" />
          ) : (
            <FaBars className="menu-icon" />
          )}
        </motion.div>
      </div>
      <motion.div
        className="menu-list"
        initial={false}
        animate={isMenuOpen ? { y: 0 } : { y: "100%" }}
        transition={{
          ease: "easeInOut",
          duration: 0.25,
        }}
      >
        <Link className="menu-list-item" to="/shop" onClick={handleMenuClick}>
          <span>SHOP</span>
        </Link>
        <Link className="menu-list-item" to="/" onClick={handleMenuClick}>
          <span>ABOUT</span>
        </Link>
        {currentUser ? (
          <div className="menu-list-item" onClick={handleSignOut}>
            <span>SIGN OUT</span>
          </div>
        ) : (
          <Link
            className="menu-list-item"
            to="/signin"
            onClick={handleMenuClick}
          >
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
  const showModal = useSelector(selectShowModal);

  const width = useViewport();
  const breakpoint = 900;

  return width > breakpoint ? (
    <LargeScreenNavBar
      currentUser={currentUser}
      dispatch={dispatch}
      showModal={showModal}
    />
  ) : (
    <SmallScreenNavBar
      currentUser={currentUser}
      dispatch={dispatch}
      showModal={showModal}
    />
  );
};

export default NavBar;
