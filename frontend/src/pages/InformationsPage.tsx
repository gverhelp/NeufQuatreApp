import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

import "../styles/InformationsPage.css";

const InformationsPage = () => {
    return (
        <Container fluid className="py-4" style={{ backgroundImage: "url('/background5.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>

            {/* <Container fluid className="text-center">
                <h1 style={{ fontFamily: "Titan One" }}> Documents et infos </h1>
            </Container> */}

            <Container fluid className="pt-3">
                <Row className="g-5"> 
                    <Col xs={3} style={{ borderRight: "5px solid #022864" }}>
                        <h1 className="text-center" style={{ fontFamily: "Titan One" }}> Documents </h1>
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="mt-3"
                        >
                            <Card className="shadow rounded-2 border-5" style={{ borderColor: "#022864" }}>
                                <Card.Body className="text-center d-flex flex-column justify-content-between">
                                    <Card.Title
                                        className="fs-5 pb-2"
                                        style={{
                                            fontFamily: "Titan One",
                                            borderBottom: "2px solid #022864",
                                        }}
                                    >
                                        Bahut de camp Louveteaux
                                    </Card.Title>
                                    <p>
                                        Cliquez sur le bouton ci-dessous pour télécharger le bahut de camp Louveteaux au format PDF.
                                    </p>
                                    <Button
                                        className="download-btn rounded-2 d-inline-block text-decoration-none text-white text-center"
                                        style={{ backgroundColor: "#022864", borderColor: "#022864" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="/path/to/agenda.pdf"
                                    >
                                        Télécharger
                                    </Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>

                    <Col xs={9}>
                        <h1 className="text-center" style={{ fontFamily: "Titan One" }}> Informations </h1>
                    </Col>

                </Row>
            </Container>

        </Container>
    );
};

export default InformationsPage;