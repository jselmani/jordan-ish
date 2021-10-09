import React from "react";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

import "./FavouriteIcon.styles.scss";
import { selectFavouriteItemsCount } from "../../redux/favourite/favourite.selectors";

const FavouriteIcon = ({ currentUser }) => {
  const itemCount = useSelector(selectFavouriteItemsCount);

  return (
    <div className="favourite-icon">
      <FaHeart className="heart" />
      {currentUser && <span className="item-count">{itemCount}</span>}
    </div>
  );
};

export default FavouriteIcon;
