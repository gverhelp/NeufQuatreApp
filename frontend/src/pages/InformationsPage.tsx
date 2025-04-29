import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import axios from "axios";

import "../styles/InformationsPage.css";
import { DocumentData, InformationData } from "../types/interfaces"
import { useEffect, useState } from "react";


const InformationsPage = () => {
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);
    const [documents, setDocuments] = useState<DocumentData[]>([]);
    const [informations, setInformations] = useState<InformationData[]>([]);

    // Function to handle the download of the PDF file
    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                // setLoading(true);

                const response = await axios.get('http://localhost:8000/api/documents/');
                const data: DocumentData[] = response.data;

                setDocuments(data);
            } catch (error) {
                console.error('Error downloading the file:', error);
                // setError("Impossible de charger les données");
            } finally {
                // setLoading(false);
            }
        };

        const fetchInformations = async () => {
            try {
                // setLoading(true);

                const response = await axios.get('http://localhost:8000/api/infos/');
                const data: InformationData[] = response.data;

                setInformations(data);
            } catch (error) {
                console.error('Error downloading the file:', error);
                // setError("Impossible de charger les données");
            } finally {
                // setLoading(false);
            }
        };

        fetchDocuments();
        fetchInformations();
    }, []);

    return (
        <Container fluid className="py-4" style={{ backgroundImage: "url('/background5.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>

            <Container fluid className="pb-4">

                <Row className="g-5"> 
                    <Col md={12} lg={3} className="order-1 order-lg-0">
                        <h1 className="text-center" style={{ fontFamily: "Titan One" }}> Documents </h1>
                        {documents.map((document, index) => (
                            <motion.div
                                key={document.id}
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                                            {document.title}
                                        </Card.Title>
                                        <p>{document.description}</p>
                                        <Button
                                            className="download-btn rounded-2 d-inline-block text-decoration-none text-white text-center"
                                            style={{ backgroundColor: "#022864", borderColor: "#022864" }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={document.file}
                                        >
                                            Télécharger
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        ))}
                    </Col>

                    <Col md={12} lg={9} className="order-0 order-lg-1">
                        <h1 className="text-center mb-0" style={{ fontFamily: "Titan One" }}> Informations </h1>
                        <Row className="g-3 justify-content-center">
                            {informations.map((information, index) => (
                                <Col md={12} lg={6} key={index}>
                                    <motion.div
                                        initial={{ x: 30, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="mt-3 h-100"
                                    >
                                        <Card className="shadow rounded-2 border-5 h-100" style={{ borderColor: "#022864" }}>
                                            <Card.Body className="text-center">
                                                {information.image && (
                                                    <Card.Img
                                                        variant="top"
                                                        src={information.image}
                                                        className="mb-3"
                                                        style={{ maxHeight: "400px", objectFit: "cover" }}
                                                    />
                                                )}
                                                {information.video && (
                                                    <video
                                                        className="mb-3"
                                                        controls
                                                        style={{ maxHeight: "400px", objectFit: "cover" }}
                                                    >
                                                        <source src={information.video} type="video/mp4" />
                                                        Votre navigateur ne supporte pas les vidéos HTML5.
                                                    </video>
                                                )}
                                                {information.videoLink && (
                                                    <iframe
                                                        className="mb-3"
                                                        width="100%"
                                                        height="400"
                                                        src={information.videoLink}
                                                        title={information.title}
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                )}
                                                <Card.Title className="fs-5" style={{ fontFamily: "Titan One" }}>
                                                    {information.title}
                                                </Card.Title>
                                                <Card.Text className="text-center">
                                                    {information.description}
                                                </Card.Text>
                                                {information.link && (
                                                    <Button
                                                        className="download-btn rounded-2 d-inline-block text-decoration-none text-white text-center"
                                                        style={{ backgroundColor: "#022864", borderColor: "#022864" }}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={information.link}
                                                    >
                                                        En savoir plus
                                                    </Button>
                                                )}
                                            </Card.Body>
                                        </Card>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Col>

                </Row>

            </Container>

        </Container>
    );
};

export default InformationsPage;