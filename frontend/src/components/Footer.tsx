import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="text-white py-4" style={ { backgroundColor: "#022864" } }>
            <Container>
                <Row className="text-center text-lg-start justify-content-center">

                    <Col lg={3} className="mb-3 mb-lg-0">
                        <h5 className="mb-3" style={{ color: "#FFBE0A", fontFamily: "Titan One" }}>À Propos</h5>
                        <p className="mb-1">LC94 Saint-Augustin | Unité scoute</p>
                        <p className="mb-1">Avenue Saint-Augustin, 16</p>
                        <p className="mb-0">(B) - 1190 Bruxelles Forest</p>
                    </Col>

                    <Col lg={3} className="mb-3 mb-lg-0">
                        <h5 className="mb-3" style={{ color: "#FFBE0A", fontFamily: "Titan One" }}>Liens utiles</h5>
                        <ul className="list-unstyled mb-0">
                            {[
                                { name: "Les Scouts", path: "https://lesscouts.be/fr", description: " - Site officiel" }, 
                                { name: "Les Guides", path: "https://www.guides.be/", description: " - Site officiel" },
                                { name: "La Scouterie", path: "https://www.lascouterie-economats.be/", description: " - Economat" },
                            ].map((link, index) => (
                                <li key={index} className="d-block">
                                    <a
                                        href={link.path}
                                        className="footer-link fw-bolder"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.name} 
                                        <span className="fw-normal" style={{ color: "#F0F7EE"}}> {link.description} </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    <Col lg={3} className="mb-3 mb-lg-0">
                        <h5 className="mb-3" style={{ color: "#FFBE0A", fontFamily: "Titan One" }}>Contact</h5>
                        <p className="mb-1">Pour toute question, contactez-nous :</p>
                        <a
                            href="mailto:unitesaintaugustin94@gmail.com"
                            className="footer-link fw-bolder"
                        >
                            unitesaintaugustin94@gmail.com
                        </a>
                    </Col>

                    <Col lg={3}>
                        <img
                            src="/les_scouts.png"
                            alt="Logo LC94"
                            style={{
                                width: "100px",
                                filter: "brightness(0) invert(1)",
                                display: "block",
                                margin: "0 auto"
                            }}
                        />
                    </Col>
                </Row>

                <hr className="border-secondary my-3" />
                <p className="text-center mb-0">
                    &copy; { new Date().getFullYear() } Tous droits réservés.
                    <br />
                    Développé par Garreth Verhelpen (Ocelot)
                    <motion.a
                        href="https://www.linkedin.com/in/gverhelp/"
                        target="_blank"
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-light ms-2 fs-5 d-inline-block"
                    >
                        <FaLinkedin/>
                    </motion.a>
                    <motion.a
                        href="https://github.com/gverhelp"
                        target="_blank"
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-light ms-2 fs-5 d-inline-block"
                    >
                        <FaGithub/>
                    </motion.a>
                </p>
            </Container>
        </footer>
    );
};

export default Footer;