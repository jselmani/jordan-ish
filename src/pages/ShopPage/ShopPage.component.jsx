import React from 'react';
import { useSelector } from 'react-redux';

import { selectAllShoes } from '../../redux/shop/shop.selectors';

import './ShopPage.styles.scss';
import ProductGrid from '../../components/ProductGrid/ProductGrid.component';

const ShopPage = () => {
    let shoes = useSelector(selectAllShoes);

    return (
        <div className="shop-page">
            <ProductGrid shoes={shoes} />
        </div>
    );
};

export default ShopPage;
