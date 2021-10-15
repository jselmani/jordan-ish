import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./FavouritesPage.styles.scss";
import ProductCard from "../../components/ProductCard/ProductCard.component";

import { selectFavouriteItems } from "../../redux/favourite/favourite.selectors";

const FavouritesPage = () => {
  const favouriteItems = useSelector(selectFavouriteItems);
  const history = useHistory();

  return (
    <div className="favourites-page">
      <div className="favourites-page-title">
        <h1>MY JAY'S</h1>
      </div>
      <div className="favourites-content">
        {favouriteItems.length > 0 ? (
          favouriteItems.map((favouriteItem, index) => {
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
    </div>
  );
};

export default FavouritesPage;
