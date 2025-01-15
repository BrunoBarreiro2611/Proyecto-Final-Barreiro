
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';  
import CartWidget from './CartWidget';

function NavBar() {
return (
    <Navbar bg="light" expand="lg">
    <div className="container-fluid">
        <Navbar.Brand as={Link} to="/">AccesoriosUY</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
            <Nav.Link as={Link} to="/category/electronics">Electrónica</Nav.Link>
            <Nav.Link as={Link} to="/category/clothing">Ropa</Nav.Link>
            <Nav.Link as={Link} to="/category/accessories">Accesorios</Nav.Link>
            <Nav.Link as={Link} to="/category/home">Hogar</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        <CartWidget />
    </div>
    </Navbar>
);
}

export default NavBar;
