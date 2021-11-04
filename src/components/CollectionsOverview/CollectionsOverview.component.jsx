import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="collections-overview"
    >
      {collections.map((collection, index) => {
        return (
          <CollectionPreview
            key={sections[index].title}
            title={sections[index].title}
            collection={collection}
          />
        );
      })}
    </motion.div>
  );
};

export default CollectionsOverview;
