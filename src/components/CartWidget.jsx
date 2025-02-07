import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import { CartContext } from '../context/CartContext'; 

function CartWidget() {
const { cartItems } = useContext(CartContext);

return (
    <div className="cart-widget d-flex align-items-center">
    <FaShoppingCart size={30} />

    {cartItems > 0 && (
        <span className="badge bg-danger ms-2">{cartItems}</span>
    )}
    </div>
);
}

export default CartWidget;
