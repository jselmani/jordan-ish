import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllShoesStart } from '../../redux/shop/shop.actions';
import { selectAllShoes } from '../../redux/shop/shop.selectors';

import './ShopPage.styles.scss';
import FilterBar from '../../components/FilterBar/FilterBar.component';
import ShopHeader from '../../components/ShopHeader/ShopHeader.component';

const ShopPage = () => {
    let shoes = useSelector(selectAllShoes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllShoesStart());
    }, [dispatch]);

    return (
        <div className="shop-page">
            <ShopHeader />
            <div className="shop-page-content">
                <FilterBar />
            </div>
        </div>
    );
};

export default ShopPage;
