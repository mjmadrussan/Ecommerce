import React from 'react';
import logo from './logo.jpg';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import './NavBar.css';



function NavBar() {
    return (
<header>
<nav>
<Navbar  id="headlogbg" bg="light" expand="lg">
  <Container>
  <LinkContainer to="/"><Navbar.Brand><img className="navbar-brand" src={logo} width="150px" alt="logo" /></Navbar.Brand></LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <LinkContainer to="/"><Nav.Link href="#home">Inicio</Nav.Link></LinkContainer>
        <NavDropdown title="Modelos" id="basic-nav-dropdown">
        <LinkContainer to="/"><NavDropdown.Item>Todo</NavDropdown.Item></LinkContainer>  
        <LinkContainer to="/category/sandalias"><NavDropdown.Item>Sandalias</NavDropdown.Item></LinkContainer>
        <LinkContainer to="/category/zapatillas"><NavDropdown.Item>Zapatillas</NavDropdown.Item></LinkContainer>
        <LinkContainer to="/category/zapatos"><NavDropdown.Item>Zapatos</NavDropdown.Item></LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to="/category/medias"><NavDropdown.Item>Medias</NavDropdown.Item></LinkContainer>
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