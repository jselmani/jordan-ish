import React from 'react';

import jordanLogo from '../../assets/images/jordan-logo.png';

import './Header.styles.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={jordanLogo} alt="jordan logo" />
            </div>
            <div className="options">
                <div className="option">
                    <span>SHOP</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
