import React from 'react';

import './ProductGrid.styles.scss';

import ProductCard from '../ProductCard/ProductCard.component';

const ProductGrid = ({ shoes }) => {
    return (
        <div className="product-grid">
            {
                shoes.map(({ id, ...props }) => {
                    return <ProductCard key={id} {...props} />
                })
            }
        </div>
    );
};

export default ProductGrid;
