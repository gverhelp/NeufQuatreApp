import { Link } from "react-router-dom";
import './Navbar.css';
import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar() {

    return (
        <Navbar variant="dark" expand="lg" fixed="top" style={{ backgroundColor: '#022864' }}>
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img alt="" src="/94.png" width="70" height="50" className="me-1" />
                    <span className="d-none d-md-inline">Unité Saint-Augustin</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-center ms-auto text-center">
                        <Nav.Link as={Link} to="/" className="me-3">Accueil</Nav.Link>
                        <Nav.Link as={Link} to="/events" className="me-3">Événements</Nav.Link>
                        <Nav.Link as={Link} to="/staffs" className="me-3">Sections</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="me-3">Contacts</Nav.Link>
                        <Nav.Link as={Link} to="/nous-rejoindre">Nous rejoindre</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
