import React, { createContext, useState } from 'react';
import all_product from '../Compenents/Assets/all_product';

export const ShopContext = createContext(null);


const getDefaultCart = () => {
    let cart = {};
    for (let product of all_product) {
        cart[product.id] = 0; 
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart()); 

    const addToCart = (productId) => {
        setCartItems((prev) => ({
            ...prev,
            [productId]: (prev[productId] || 0) + 1, 
        }));
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => ({
            ...prev,
            [productId]: Math.max((prev[productId] || 0) - 1, 0), 
        }));
    };
    
    const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = all_product.find((product) => product.id === Number(item));
            totalAmount += itemInfo.new_price * cartItems[item];
        }
    }
    return totalAmount;
};
const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            totalItems += cartItems[item];
        }
    }
    return totalItems;
}
    const contextValue = {
        getTotalCartAmount,
        getTotalCartItems,
        all_product,
        cartItems, 
        addToCart,
        removeFromCart,
    };
 
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;


