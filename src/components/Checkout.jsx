import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Checkout() {
const { cartItems, clearCart } = useContext(CartContext);

const handleCheckout = () => {
    alert('Compra realizada con éxito');
    clearCart();
};

return (
    <div>
    <h2>Detalle de compra</h2>
    {cartItems > 0 ? (
        <div>
        <p>Productos en el carrito: {cartItems}</p>
        <button onClick={handleCheckout}>Confirmar compra</button>
        </div>
    ) : (
        <p>No hay productos en el carrito.</p>
    )}
    </div>
);
}

export default Checkout;
