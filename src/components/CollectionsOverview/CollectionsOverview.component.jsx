import React from "react";
import { useSelector } from "react-redux";

import "./CollectionsOverview.styles.scss";
import CollectionPreview from "../CollectionPreview/CollectionPreview.component";
import JordanSpinner from "../JordanSpinner/JordanSpinner.component";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import useStartActions, { FetchTypes } from "../../hooks/useStartActions";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);
  const sections = useSelector(selectDirectorySections);
  const { isFetching } = useStartActions(FetchTypes.COLLECTION, null);

  return isFetching ? (
    <JordanSpinner />
  ) : (
    <div className="collections-overview">
      {collections.map((collection, index) => {
        return (
          <CollectionPreview
            key={index}
            title={sections[index].title}
            collection={collection}
          />
        );
      })}
    </div>
  );
};

export default CollectionsOverview;
