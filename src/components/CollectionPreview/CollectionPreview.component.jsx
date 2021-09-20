import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import './CollectionPreview.styles.scss';
import ProductCard from '../ProductCard/ProductCard.component';

const CollectionPreview = ({ title, collection }) => {
    const history = useHistory();
    const match = useRouteMatch();
    const urlTitle = title.replaceAll(' ', '-').toLowerCase();

    return (
        <div className="collection-preview">
            <h1 className="title" onClick={() => history.push(`${match.url}/${urlTitle}`)}>
                { title.toUpperCase() }
            </h1>
            <div className="preview">
                {
                    collection
                        .filter((product, index) => index < 4)
                        .map((product) => {
                            return <ProductCard key={product.id} {...product} />
                        })
                }
            </div>
        </div>
    );
};

export default CollectionPreview;
