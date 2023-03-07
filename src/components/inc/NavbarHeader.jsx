import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavbarHeader() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link to="/" className='navbar-brand'>Task Master</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/home" className='nav-link'>Home</Link>
              <Link to="/contact" className='nav-link'>Contact Us</Link>
              <Link to="/employees" className='nav-link'> Employees</Link>
              <Link to="/dashboard" className='nav-link'> Dashboard</Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              </Nav>
              <Nav>
              <Link to="/login" className='nav-link justify-content-end'>Login</Link>
              </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavbarHeader;