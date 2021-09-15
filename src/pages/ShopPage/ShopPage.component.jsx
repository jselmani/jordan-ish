import React from 'react';
import { useSelector } from 'react-redux';

import { selectAllShoes } from '../../redux/shop/shop.selectors';

import './ShopPage.styles.scss';
import FilterBar from '../../components/FilterBar/FilterBar.component';
import ShopHeader from '../../components/ShopHeader/ShopHeader.component';

const ShopPage = () => {
    let shoes = useSelector(selectAllShoes);

    return (
        <div className="shop-page">
            <ShopHeader />
            <div className="shop-page-content">
                <FilterBar />
                <div className="product-grid">
                    { console.log(shoes) }
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
