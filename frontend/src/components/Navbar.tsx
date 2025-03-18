import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" style={{ backgroundColor: '#022864' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img alt="" src="/94.png" width="70" height="50"/>
            Unité Saint-Augustin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="me-3" as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link className="me-3" as={Link} to="/events">Événements</Nav.Link>
            <Nav.Link className="me-3" as={Link} to="/staff">Staffs</Nav.Link>
            <Nav.Link as={Link} to="/camps">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
