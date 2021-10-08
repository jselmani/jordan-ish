import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
