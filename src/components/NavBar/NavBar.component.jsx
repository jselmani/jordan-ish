import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

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
        <Link className="option" to="/checkout">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

const SmallScreenNavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  return (
    <div className="navbar">
      <Link className="logo-container" to="/">
        <img src={jordanLogo} alt="jordan logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/checkout">
          <CartIcon />
        </Link>
        <div className="option" onClick={handleClick}>
          {clicked ? (
            <FaTimes className="menu-icon" />
          ) : (
            <FaBars className="menu-icon" />
          )}
        </div>
      </div>
      <div className={clicked ? "menu-list" : "menu-list close"}>
        <Link className="menu-list-item" to="/shop">
          <span>SHOP</span>
        </Link>
        <Link className="menu-list-item" to="/">
          <span>ABOUT</span>
        </Link>
      </div>
    </div>
  );
};

const NavBar = () => {
  const width = useViewport();
  const breakpoint = 840;

  return width > breakpoint ? <LargeScreenNavBar /> : <SmallScreenNavBar />;
};

export default NavBar;
