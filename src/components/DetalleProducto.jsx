import React from 'react';
import { useParams } from 'react-router-dom';  

const DetalleProducto = () => {
const { id } = useParams();  

return (
    <div>
    <h1>Detalle del producto {id}</h1>
    </div>
);
};

export default DetalleProducto;
