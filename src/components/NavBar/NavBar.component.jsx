import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

import jordanLogo from "../../images/jordan-logo-white.png";

import "./NavBar.styles.scss";
import CartIcon from "../CartIcon/CartIcon.component";
import useViewport from "../../hooks/useViewport";

const LargeScreenNavBar = () => {
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
        <Link className="option" to="/signin">
          <span>SIGN IN</span>
        </Link>
        <Link className="option" to="/checkout">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

const SmallScreenNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    isOpen
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
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
          className={isOpen ? "option is-open" : "option"}
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
        animate={isOpen ? { x: 0 } : { x: "100%" }}
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
        <Link className="menu-list-item" to="/signin" onClick={handleClick}>
          <span>SIGN IN</span>
        </Link>
      </motion.div>
    </div>
  );
};

const NavBar = () => {
  const width = useViewport();
  const breakpoint = 840;

  return width > breakpoint ? <LargeScreenNavBar /> : <SmallScreenNavBar />;
};

export default NavBar;
