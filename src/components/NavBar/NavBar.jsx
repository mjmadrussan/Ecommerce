import React from 'react';
import logo from './logo.jpg';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import './NavBar.css';



function NavBar() {
    return (
<header>
<nav>
<Navbar  id="headlogbg" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img className="navbar-brand" src={logo} width="150px" alt="logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <NavDropdown title="Modelos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Sandalias</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Zapatillas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Zapatos</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Medias</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Acerca</Nav.Link>
        <Nav.Link href="#link">Contacto</Nav.Link>
        
      </Nav>
      <CartWidget />
    </Navbar.Collapse>
  </Container>
  </Navbar>
  </nav>
  </header>
    );
}

export default NavBar;