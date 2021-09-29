import React from 'react';
import { FaShoppingBag } from 'react-icons/fa'

import './CartIcon.styles.scss';

const CartIcon = () => {
    return (
        <div className="cart-icon">
            <FaShoppingBag className="shopping-bag" />
            <span className="item-count"></span>
        </div>
    );
};

export default CartIcon;
