import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

function CartWidget() {
const cartItems = 5; 

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
