import React from 'react';
import { Link } from 'react-router-dom';

import jordanLogo from '../../images/jordan-logo.png';

import './NavBar.styles.scss';

const NavBar = () => {
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
            </div>
        </div>
    );
};

export default NavBar;
