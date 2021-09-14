import React from 'react';
import { Link } from 'react-router-dom';

import jordanLogo from '../../images/jordan-logo.png';

import './Header.styles.scss';

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img src={jordanLogo} alt="jordan logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    <span>SHOP</span>
                </Link>
                <Link className="option" to="/collections">
                    <span>COLLECTIONS</span>
                </Link>
                <Link className="option" to="/">
                    <span>ABOUT</span>
                </Link>
            </div>
        </div>
    );
};

export default Header;
