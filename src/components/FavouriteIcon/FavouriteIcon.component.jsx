import React from "react";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

import "./FavouriteIcon.styles.scss";

const FavouriteIcon = () => {
  const itemCount = useSelector();

  <div className="favourite-icon">
    <FaHeart className="heart" />
    <span className="item-count">{itemCount}</span>
  </div>;
};

export default FavouriteIcon;
