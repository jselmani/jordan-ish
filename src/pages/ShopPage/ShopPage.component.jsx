import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { motion } from "framer-motion";

import "./ShopPage.styles.scss";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview.component";
import CollectionPage from "../CollectionPage/CollectionPage.component";

const ShopPage = () => {
  const match = useRouteMatch();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="shop-page"
    >
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </motion.div>
  );
};

export default ShopPage;
