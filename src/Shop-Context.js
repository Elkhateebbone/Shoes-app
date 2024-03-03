import React, { createContext, useState } from 'react';
import Products from './products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < Products.length; i++) {
        cart[Products[i].id] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const AddToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = Products.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const RemoveFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItem = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = { cartItems, AddToCart, RemoveFromCart, updateCartItem, getTotalCartAmount };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
