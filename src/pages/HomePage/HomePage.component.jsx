import React from "react";
import { motion } from "framer-motion";

import "./HomePage.styles.scss";

import Directory from "../../components/Directory/Directory.component";
import Jumbotron from "../../components/Jumbotron/Jumbotron.component";
import TitleText from "../../components/TitleText/TitleText.component";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="homepage"
    >
      <Jumbotron />
      <TitleText
        title="SHOP COLLECTIONS"
        subtitle="Our top collections all in one place"
      />
      <Directory />
    </motion.div>
  );
};

export default HomePage;
