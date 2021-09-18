import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import './ShopPage.styles.scss';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import CollectionPage from '../CollectionPage/CollectionPage.component';

const ShopPage = () => {
    const match = useRouteMatch();

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
};

export default ShopPage;
