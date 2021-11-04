import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import "./FavouritesPage.styles.scss";
import ProductCard from "../../components/ProductCard/ProductCard.component";

import { selectFavouriteItems } from "../../redux/favourite/favourite.selectors";

const FavouritesPage = () => {
  const favouriteItems = useSelector(selectFavouriteItems);
  const history = useHistory();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="favourites-page"
    >
      <div className="favourites-page-title">
        <h1>MY JAY'S</h1>
      </div>
      <div className="favourites-content">
        {favouriteItems.length > 0 ? (
          favouriteItems.map((favouriteItem) => {
            return (
              <ProductCard
                key={favouriteItem.specificId}
                routeToProduct={() =>
                  history.push(`products/${favouriteItem.id[0]}`)
                }
                favourite={true}
                {...favouriteItem}
              />
            );
          })
        ) : (
          <h1 className="favourites-page-empty">GO PICK SOME FAVES, HOOPER.</h1>
        )}
      </div>
    </motion.div>
  );
};

export default FavouritesPage;
