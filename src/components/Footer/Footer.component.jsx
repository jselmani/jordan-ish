import React from "react";

import "./Footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <span>
          This website was designed and built for entertainment purposes only.{" "}
          <br />
          All content rights are reserved to Nike and Jordan brand.
        </span>
        <span className="credits">Developed with ❤️ by Jiel Selmani</span>
      </div>
    </div>
  );
};

export default Footer;
