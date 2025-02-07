import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
const { id } = useParams();
const [producto, setProducto] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchProducto = async () => {
    try {
        setLoading(true);
        setError(null);

        const productos = [
        { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', precio: 100 },
        { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', precio: 200 },
        { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', precio: 300 },
        ];

        const productoEncontrado = productos.find((producto) => producto.id === parseInt(id));

        if (!productoEncontrado) {
        throw new Error('Producto no encontrado');
        }

        setProducto(productoEncontrado);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
    };

    fetchProducto();
}, [id]);

const renderContent = () => {
    if (loading) {
    return <div><h2>Cargando detalles del producto...</h2></div>;
    }

    if (error) {
    return <div><h2>{error}</h2></div>;
    }

    if (!producto) {
    return <div><h2>Producto no encontrado</h2></div>;
    }

    return (
    <div>
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <p><strong>Precio: </strong>${producto.precio}</p>
        <button onClick={() => alert('Producto agregado al carrito')}>Agregar al carrito</button>
        <img 
        src={`https://via.placeholder.com/400?text=${producto.nombre}`} 
        alt={producto.nombre} 
        style={{ width: '100%', height: 'auto' }}
        />
    </div>
    );
};

return (
    <div>
    {renderContent()}
    </div>
);
};

export default DetalleProducto;
