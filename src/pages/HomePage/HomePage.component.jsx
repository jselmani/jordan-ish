import React from "react";

import "./HomePage.styles.scss";

import Directory from "../../components/Directory/Directory.component";
import Jumbotron from "../../components/Jumbotron/Jumbotron.component";
import TitleText from "../../components/TitleText/TitleText.component";

const HomePage = () => {
  return (
    <div className="homepage">
      <Jumbotron />
      <TitleText
        title="SHOP COLLECTIONS"
        subtitle="Our top collections all in one place"
      />
      <Directory />
    </div>
  );
};

export default HomePage;
