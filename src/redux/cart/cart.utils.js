export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.specificId === cartItemToAdd.specificId);

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.specificId === cartItemToAdd.specificId
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
    }

    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.specificId === cartItemToRemove.specificId);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.specificId !== cartItemToRemove.specificId);
    }

    return cartItems.map(cartItem =>
            cartItem.specificId === cartItemToRemove.specificId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};
