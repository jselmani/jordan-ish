import React from 'react';

import './ProductCard.styles.scss';

const ProductCard = () => {
    return (
        <div className="directory-card-container">
            <img className="shoe-image" src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/421b4133-8e96-475c-9f1c-551e1ed3230d/jordan-point-lane-shoes-kBMmSV.png" alt="shoe" />
            <div className="tag-container">
                <span>NIKE MAX AIR</span>
            </div>
            <div className="content-container">
                <div className="price">
                    <span>$170</span>
                </div>
                <div className="shoe-name">
                    <span>Jordan Point Lane</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
