import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingBag } from 'react-icons/fa'

import './CartIcon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = () => {
    const itemCount = useSelector(selectCartItemsCount);

    return (
        <div className="cart-icon">
            <FaShoppingBag className="shopping-bag" />
            <span className="item-count">{ itemCount }</span>
        </div>
    );
};

export default CartIcon;
