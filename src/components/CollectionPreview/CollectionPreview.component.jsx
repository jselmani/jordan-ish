import React from 'react';

import './CollectionPreview.styles.scss';
import ProductCard from '../ProductCard/ProductCard.component';

const CollectionPreview = ({ title, collection }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{ title.toUpperCase() }</h1>
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
