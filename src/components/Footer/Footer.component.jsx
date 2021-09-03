import React from 'react';

import './Footer.styles.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <span>
                    This website was designed and built for entertainment purposes only. <br />  
                    No purchases made here will be shipped, nor will funds be collected. <br />
                    All content rights are reserved to Nike and Jordan brand.
                </span>
                <span className="credits">
                    Developed with ❤️ by Jiel Selmani
                </span>
            </div>
        </div>
    );
}

export default Footer;
