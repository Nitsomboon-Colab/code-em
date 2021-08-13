import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import "./NavbarComponent.css";

const NavbarComponent = () => {
  return (
    <Navbar expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <Image src="Logo.svg" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Catalog" id="basic-nav-dropdowncatalog">
              <NavDropdown.Item href="#">Catalog1</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resource" id="basic-nav-dropdownResoures">
              <NavDropdown.Item href="#">Resource1</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Community" id="basic-nav-dropdownCommunity">
              <NavDropdown.Item href="#">Community1</NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href="#link">Pro plan</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  )
}

export default NavbarComponent