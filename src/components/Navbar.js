import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/container';
import NavDropdown from 'react-bootstrap/NavDropdown';
<<<<<<< Updated upstream
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
=======
>>>>>>> Stashed changes

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">{'Code</em>'}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Catalog" id="basic-nav-dropdowncatalog"></NavDropdown>
                        <NavDropdown title="Resoures" id="basic-nav-dropdownResoures"></NavDropdown>
                        <NavDropdown title="Community" id="basic-nav-dropdownCommunity"></NavDropdown>
                    <Nav.Link href="#link">Pro plan</Nav.Link>
                    </Nav>
<<<<<<< Updated upstream
                   
=======
>>>>>>> Stashed changes
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

<<<<<<< Updated upstream
export default NavbarComponent
=======
export default NavbarComponent;
>>>>>>> Stashed changes
