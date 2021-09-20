import React, { useState } from 'react';

import './ProductCard.styles.scss';

const ProductCard = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const { gender, name, price, primaryImages, secondaryImages, tag, type, routeToProduct } = props;
    
    return (
        <div 
            className="product-card" 
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onClick={routeToProduct}
        >
            <img className="primary-image" src={primaryImages[0]} alt={name} />
            {
                isVisible && secondaryImages ?
                    <img className="secondary-image" src={secondaryImages[0]} alt={name} />
                    : <div/>
            }
            <div className="tag">
                <span>{ tag }</span>
            </div>
            <div className="product-content">
                <div className="product-price">
                    <span>${ price }</span>
                </div>
                <div className="product-gender .product-type">
                    <span>{ gender } | { type }</span>
                </div>
                <div className="product-name">
                    <span>{ name }</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
