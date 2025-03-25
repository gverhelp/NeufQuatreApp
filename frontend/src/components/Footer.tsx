import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer: React.FC = () => {
    return (
        <footer className="text-light py-4" style={ { backgroundColor: "#022864" } }>
            <Container>
                <Row className="text-center text-md-start justify-content-center">

                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <h5>À Propos</h5>
                        <p>
                            94ème Saint-Augustin | Unité scoute.
                            <br/>
                            Rejoignez-nous pour vivre l’aventure, apprendre et grandir ensemble, tout en cultivant des valeurs d’amitié, de respect et de solidarité.
                        </p>
                    </Col>

                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <h5>Liens utiles</h5>
                        <ul className="list-unstyled">
                            {["Accueil", "Agenda", "Sections", "Contacts"].map((link) => (
                                <a href="#" className="text-decoration-none d-block">
                                    {link}
                                </a>
                            ))}
                        </ul>
                    </Col>

                    <Col xs={12} md={4}>
                        <h5>Suivez-nous</h5>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3">
                            {[FaFacebook, FaInstagram, FaTwitter].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-light fs-4"
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                        </div>
                    </Col>
                </Row>

                <hr className="border-secondary my-3" />
                <p className="text-center mb-0">&copy; {new Date().getFullYear()} Tous droits réservés.</p>
            </Container>
        </footer>
    );
};

export default Footer;