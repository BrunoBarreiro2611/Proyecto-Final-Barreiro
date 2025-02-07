import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
const { id } = useParams();
const [producto, setProducto] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchProducto = () => {
    const productos = [
        { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', precio: 100 },
        { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', precio: 200 },
        { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', precio: 300 },
    ];

    const productoEncontrado = productos.find((producto) => producto.id === parseInt(id));

    if (productoEncontrado) {
        setProducto(productoEncontrado);
    } else {
        setProducto(null);
    }
    setLoading(false);
    };

    fetchProducto();
}, [id]);

if (loading) {
    return (
    <div className="container text-center">
        <h2>Cargando detalles del producto...</h2>
    </div>
    );
}

if (!producto) {
    return (
    <div className="container text-center">
        <h2>Producto no encontrado</h2>
    </div>
    );
}

return (
    <div className="container">
    <div className="row">
        <div className="col-md-6">
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <p><strong>Precio: </strong>${producto.precio}</p>
        <button className="btn btn-success">Agregar al carrito</button>
        </div>
        <div className="col-md-6">
          {/* Aquí podrías añadir una imagen o galería del producto */}
        <img 
            src={`https://via.placeholder.com/400?text=${producto.nombre}`} 
            alt={producto.nombre} 
            className="img-fluid"
        />
        </div>
    </div>
    </div>
);
};

export default ItemDetailContainer;


