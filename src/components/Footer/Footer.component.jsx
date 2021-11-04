import React from "react";
import { motion } from "framer-motion";

import "./Footer.styles.scss";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="footer"
    >
      <div className="footer-content">
        <span>
          This website was designed and built for entertainment purposes only.{" "}
          <br />
          All content rights are reserved to Nike and Jordan brand.
        </span>
        <span className="credits">Developed with ❤️ by Jiel Selmani</span>
      </div>
    </motion.div>
  );
};

export default Footer;
