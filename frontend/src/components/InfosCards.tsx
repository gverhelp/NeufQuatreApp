import { motion } from 'framer-motion';

import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { SectionData, ChefData } from '../types/interfaces';
import '../Pages/Sections/Sections.css';


function InfoCards({ sectionData, chefsData } : { sectionData: SectionData, chefsData: ChefData[] }) {
    return (
        <Container fluid className="py-5" style={{ backgroundImage: "url('/background7.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>
            <Container>
                <Row className="justify-content-center align-items-stretch g-4">
                    
                    {/* Uniforme Card */}
                    <Col md={6}>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-100"
                        >
                        <Card className="p-3 border-5 shadow-lg h-100" style={{ borderColor: "#022864" }}>
                            <Card.Body >
                                <Card.Title className="fs-4" style={{ fontFamily: "Titan One" }}>Uniforme</Card.Title>
                                <Card.Text>
                                    <p>
                                        {sectionData?.uniformDescription}
                                    </p>
                                    <img src="/UniformePourTous.png" alt="Uniforme pour tous" className="img-fluid rounded mt-2"/>
                                    <img src={sectionData?.uniformImage} alt="Uniforme de section" className="img-fluid rounded mt-2" />
                                    <p className="mt-3 mb-0">
                                        <span className="fw-bold">
                                            Besoin d'acheter un insigne ou un uniforme ?
                                        </span>
                                        <a 
                                            href="https://www.lascouterie-economats.be/" 
                                            target="_blank"
                                            rel="noopener noreferrer" 
                                            className="scouterie-btn d-inline-block text-decoration-none text-white text-center mt-3"
                                            >
                                            Boutique de la Scouterie
                                        </a>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </motion.div>
                    </Col>
                    
                    {/* Annuaire Staff Card */}
                    <Col md={6}>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-100"
                        >
                        <Card className="p-3 border-5 shadow-lg h-100" style={{ borderColor: "#022864" }}>
                            <Card.Body>
                                <Card.Title className="fs-4" style={{ fontFamily: "Titan One" }}>Annuaire staff</Card.Title>
                                <Card.Text className="fs-6">
                                    Besoin d'informations?
                                    <br />
                                    Contactez notre staff, soit par email (de préférence), soit par message ou par appel si cela est urgent :
                                </Card.Text>
                                <ListGroup variant="flush">
                                    {sectionData?.email &&
                                        <ListGroupItem className="fw-bold" style={{ borderColor: "#022864" }}>
                                            Email de la section : {sectionData?.email}
                                        </ListGroupItem>
                                    }
                                    {chefsData.map((member, index) => (
                                        <ListGroupItem key={index} style={{ borderColor: "#022864" }}>
                                            {member.totem} : {member.phoneNumber}
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        </motion.div>
                    </Col>
                    
                    {/* Compte Bancaire Card */}
                    {sectionData?.name != "Clan" &&
                        <Col md={6}>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="h-100"
                            >
                            <Card className="p-3 border-5 shadow-lg h-100" style={{ borderColor: "#022864" }}>
                                <Card.Body>
                                    <Card.Title className="fs-4" style={{ fontFamily: "Titan One" }}>Compte bancaire</Card.Title>
                                    <Card.Text>
                                        <p className="fs-6">
                                            Tous les virements nécessaires aux événements liés à cette section, comme les week-ends, les activités ou le camp,
                                            sont à faire sur le compte bancaire suivant :
                                        </p>
                                        <p className="fw-bold">{sectionData?.bankAccount}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </motion.div>
                        </Col>
                    }
                    
                    {/* Radio Camp Card */}
                    {!["Unité", "Clan"].includes(sectionData?.name) && (<Col md={6}>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-100"
                        >
                        <Card className="p-3 border-5 shadow-lg h-100" style={{ borderColor: "#022864" }}>
                            <Card.Body>
                                <Card.Title className="fs-4" style={{ fontFamily: "Titan One" }}>Radio camp</Card.Title>
                                <Card.Text>
                                    <p className="fs-6">
                                        Radio camp est un outil mis à la disposition des parents pour que ces derniers puissent suivre les aventures de leurs enfants durant le camp.
                                        <br />
                                        Pour y accéder, il vous suffit de cliquer sur le bouton ci-dessous et d'ensuite introduire le mot de passe fourni au préalable par le staff.
                                    </p>
                                    <a 
                                        href={`/radio-camps/${sectionData?.name.toLowerCase()}`}
                                        // target="_blank"
                                        rel="noopener noreferrer" 
                                        className="scouterie-btn d-inline-block text-decoration-none text-white text-center"
                                        >
                                        Radio camp
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </motion.div>
                    </Col>
                    )}
                </Row>
            </Container>
        </Container>
    );
}

export default InfoCards;