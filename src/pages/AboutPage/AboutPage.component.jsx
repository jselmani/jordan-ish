import React from "react";
import { motion } from "framer-motion";

import "./AboutPage.styles.scss";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="about-page"
    >
      About Page
    </motion.div>
  );
};

export default AboutPage;
