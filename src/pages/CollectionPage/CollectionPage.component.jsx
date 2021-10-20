import React from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import "./CollectionPage.styles.scss";
import ProductCard from "../../components/ProductCard/ProductCard.component";
import JordanSpinner from "../../components/JordanSpinner/JordanSpinner.component";

import { selectCollection } from "../../redux/shop/shop.selectors";
import useStartActions, { FetchTypes } from "../../hooks/useStartActions";

const CollectionPage = () => {
  const history = useHistory();
  let { collectionId } = useParams();
  let collection = useSelector(selectCollection(collectionId));
  const title = collectionId.replaceAll("-", " ").toUpperCase();

  const { isFetching } = useStartActions(FetchTypes.COLLECTION, null);

  return isFetching ? (
    <JordanSpinner />
  ) : (
    <div className="collection-page">
      <h1 className="title">
        {title} | {collection.length}
      </h1>
      <div className="products">
        {collection.map((product) => {
          return (
            <ProductCard
              key={product.id[0]}
              routeToProduct={() =>
                history.push(`../products/${product.id[0]}`)
              }
              {...product}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
