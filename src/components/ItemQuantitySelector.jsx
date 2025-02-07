import React, { useState } from 'react';

function ItemQuantitySelector({ onChange }) {
const [quantity, setQuantity] = useState(1);

const handleIncrement = () => setQuantity(quantity + 1);
const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

const handleChange = (e) => {
    const newQuantity = Math.max(1, parseInt(e.target.value, 10) || 1);
    setQuantity(newQuantity);
    onChange(newQuantity);
};

return (
    <div className="d-flex align-items-center">
    <button onClick={handleDecrement}>-</button>
    <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min="1"
        className="mx-2"
    />
    <button onClick={handleIncrement}>+</button>
    </div>
);
}

export default ItemQuantitySelector;
