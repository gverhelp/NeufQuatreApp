import { motion } from 'framer-motion';

import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { SectionData, ChefData } from '../types/interfaces';


function InfoCards({ sectionData, chefsData } : { sectionData: SectionData, chefsData: ChefData[] }) {
    return (
        <Container fluid className="py-5 text-center" style={{ backgroundImage: "url('/background2.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>
            <Container>
                <Row className="justify-content-center align-items-stretch g-4">
                    
                    {/* Uniforme Card */}
                    <Col md={6}>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-100"
                        >
                        <Card className="p-3 text-start border-0 shadow-lg h-100">
                            <Card.Body>
                                <Card.Title className="fs-4" style={{ fontFamily: "Titan One" }}>Uniforme</Card.Title>
                                <Card.Text>
                                    <p className="fs-6">Voici l'uniforme officiel à porter lors des événements scouts.</p>
                                    <img src="/UniformePio.png" alt="Uniforme pionniers" className="img-fluid rounded mt-2" />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </motion.div>
                    </Col>
                    
                    {/* Annuaire Staff Card */}
                    <Col md={6}>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-100"
                        >
                        <Card className="p-3 text-start border-0 shadow-lg h-100">
                            <Card.Body>
                                <Card.Title className="fs-4" style={{ fontFamily: "Titan One" }}>Annuaire staff</Card.Title>
                                <Card.Text className="fs-6">Vous pouvez contacter notre staff :</Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="fw-bold">Email de la section : {sectionData?.email}</ListGroup.Item>
                                    {chefsData.map((member, index) => (
                                        <ListGroup.Item key={index}>
                                            {member.totem} : {member.phoneNumber}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        </motion.div>
                    </Col>
                    
                    {/* Compte Bancaire Card */}
                    <Col md={6}>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-100"
                        >
                        <Card className="p-3 text-start border-0 shadow-lg h-100">
                            <Card.Body>
                                <Card.Title className="fs-4" style={{ fontFamily: "Titan One" }}>Compte bancaire</Card.Title>
                                <Card.Text>
                                    <p className="fs-6">
                                        Tous les virements nécessaires aux événements liés à cette section, comme les week-ends, les activités ou le camp,
                                        sont à faire sur le compte bancaire suivant:
                                    </p>
                                    <p className="fw-bold">{sectionData?.bankAccount}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </motion.div>
                    </Col>
                    
                    {/* Radio Camp Card */}
                    <Col md={6}>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-100"
                        >
                        <Card className="p-3 text-start border-0 shadow-lg h-100">
                            <Card.Body>
                                <Card.Title className="fs-4" style={{ fontFamily: "Titan One" }}>Radio camp</Card.Title>
                                <Card.Text>
                                    <p className="fs-6">
                                        Radio camp est un outil mis à la disposition des parents pour que ces derniers puissent suivre les aventures de leurs enfants durant le camp!
                                        <br />
                                        Pour y accéder, il vous suffit de cliquer sur le lien ci-dessous et d'ensuite introduire le mot de passe fourni au préalable par le staff.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default InfoCards;