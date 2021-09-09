import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllShoesStart } from '../../redux/shop/shop.actions';
import { selectAllShoes } from '../../redux/shop/shop.selectors';

const ShopPage = () => {
    const shoes = useSelector(selectAllShoes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllShoesStart());
    }, [dispatch]);

    return (
        <div className="shop-page">
            {
                console.log(shoes)
            }
        </div>
    );
};

export default ShopPage;
