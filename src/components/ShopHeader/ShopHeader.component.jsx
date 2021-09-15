import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoFilterSharp } from 'react-icons/io5';

import './ShopHeader.styles.scss';
import { toggleFilterBarHidden } from '../../redux/shop/shop.actions';
import { selectIsFilterBarHidden } from '../../redux/shop/shop.selectors';

const ShopHeader = () => {
    const dispatch = useDispatch();
    const isFilterHidden = useSelector(selectIsFilterBarHidden);

    return (
        <div className="shop-header">
            <div className="shop-title">
                <h1>Jordan Shoes</h1>
            </div>
            <div className="shop-filter">
                <button className="shop-filter-button" onClick={() => dispatch(toggleFilterBarHidden())}>
                    {
                        isFilterHidden ?
                            <h3>Show Filter</h3>
                            : <h3>Hide Filter</h3>
                    }
                    <IoFilterSharp />
                </button>
            </div>
        </div>
    );
};

export default ShopHeader;
