import React from 'react';
import { Link } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
];

return (
    <div className="container">
    <h1>{greeting || "Bienvenido a nuestra tienda"}</h1>
    <div className="row">
        {productos.map((producto) => (
        <div key={producto.id} className="col-md-4 mb-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <Link to={`/item/${producto.id}`} className="btn btn-primary">
                Ver Detalle
                </Link>
            </div>
            </div>
        </div>
        ))}
    </div>
    </div>
);
};

export default ItemListContainer;
