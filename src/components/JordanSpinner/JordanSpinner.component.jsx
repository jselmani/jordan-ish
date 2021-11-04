import React from "react";
import { motion } from "framer-motion";

import jordanLogoBlack from "../../images/jordan-logo-black.png";

import "./JordanSpinner.styles.scss";

const JordanSpinner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="jordan-spinner-container"
    >
      <img className="jordan-spinner" src={jordanLogoBlack} alt="Jordan Logo" />
    </motion.div>
  );
};

export default JordanSpinner;
