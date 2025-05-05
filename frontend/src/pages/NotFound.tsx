import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
    return (
        <Container fluid className="text-center py-5 d-flex justify-content-center align-items-center" style={{ height: "80vh", backgroundImage: "url('/background7.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>
            <Container>
                <h1 style={{ fontFamily: "Titan One", fontSize: "5rem" }}>404</h1>
                <p className="fs-4 mb-4" style={{ fontFamily: "Titan One" }}>Oups ! Cette page n'existe pas.</p>
                <Link to="/" className="validate-btn rounded-2 d-inline-block text-decoration-none text-white text-center" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                    Retour à l'accueil
                </Link>
            </Container>
        </Container>
    );
};

export default NotFound;