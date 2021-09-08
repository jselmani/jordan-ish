import React from 'react';

import './CollectionItem.styles.scss';

const CollectionItem = () => {
    return (
        <div className="collection-item">
            <img className="shoe-image" src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/421b4133-8e96-475c-9f1c-551e1ed3230d/jordan-point-lane-shoes-kBMmSV.png" alt="shoe" />
            <div className="tag">
                <span>NIKE MAX AIR</span>
            </div>
            <div className="content">
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

export default CollectionItem;
