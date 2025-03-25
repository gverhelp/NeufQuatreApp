import { Link } from "react-router-dom";
import './Navbar.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function NavigationBar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navbarBg = menuOpen ? "white" : "transparent";

    return (
        <Navbar
            data-bs-theme={ scrolled ? "dark" : "light" }
            bg={ scrolled ? "" : navbarBg }
            expand="lg"
            fixed="top"
            className={ scrolled ? "navbar-scrolled" : "transparent" }
        >
            <Container>
                <Navbar.Brand as={Link} to="/" className={`d-flex align-items-center`}>
                    <img alt="" src="/94.png" width="70" height="50" className="me-1"/>
                    <span className="d-none d-md-inline">Unité Saint-Augustin</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={ () => setMenuOpen(!menuOpen) }/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link as={Link} to="/" className="nav-link me-3">Accueil</Nav.Link>
                        <Nav.Link as={Link} to="/agenda" className="nav-link me-3">Agenda</Nav.Link>
                        <Nav.Link as={Link} to="/sections" className="nav-link me-3">Sections</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="nav-link me-3">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
