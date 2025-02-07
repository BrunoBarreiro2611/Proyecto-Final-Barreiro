import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cartItems, setCartItems] = useState(0);

const addToCart = () => setCartItems(cartItems + 1);
const removeFromCart = () => setCartItems(cartItems > 0 ? cartItems - 1 : 0);
const clearCart = () => setCartItems(0);

return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
    {children}
    </CartContext.Provider>
);
};
