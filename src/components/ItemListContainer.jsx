import React from 'react';
import { Link } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
]

return (
    <div>
    <h1>{greeting}</h1>
    <ul>
        {productos.map(producto => (
        <li key={producto.id}>
            <Link to={`/item/${producto.id}`}>{producto.nombre}</Link>
        </li>
        ))}
    </ul>
    </div>
);
};

export default ItemListContainer;
