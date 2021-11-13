import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbarComponent.css';

class NavbarComponent extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" id="navbar" bg="dark" variant="dark">
                <Navbar.Brand href="/">UK POOLS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Navbar>
        )
    }
}

export default NavbarComponent;