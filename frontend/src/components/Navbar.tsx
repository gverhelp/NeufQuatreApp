import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";


const pages = [
    { name: "Accueil", path: "/" },
    { name: "Agenda", path: "/agenda" },
    { name: "Sections", path: "/sections" },
    { name: "Radio Camps", path: "/radio-camps" },
    { name: "Documents et infos", path: "/documents-et-infos" },
]


function NavigationBar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const navbarBg = menuOpen ? "white" : "transparent";
    
    const location = useLocation();
    const currentPath = location.pathname;


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


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
                    <span className="d-none d-xl-inline">Unité Saint-Augustin</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={ () => setMenuOpen(!menuOpen) }/>

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto text-center">
                        {pages.map((page, index) => (
                            <Nav.Link
                                key={index}
                                as={Link}
                                to={page.path}
                                className={`nav-link me-3 ${currentPath === page.path ? "active" : ""}`}
                            >
                                {page.name}
                            </Nav.Link>
                        ))}
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
