import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbarComponent.css';

class NavbarComponent extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" id="navbar" bg="dark" variant="dark">
                <Navbar.Brand href="/">UK Pools</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/validators" id="validator-nav-button" className="navbar-button">Validators</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavbarComponent;