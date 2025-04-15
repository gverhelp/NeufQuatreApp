import { Container, Row, Col, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { EventData } from "../types/interfaces";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { motion } from "framer-motion";
import "../pages/Agenda/AgendaPage.css";


const legendItems = [
    { name: "Baladins", color: "#00A0DD" },
    { name: "Lutins", color: "#CC0739" },
    { name: "Louveteaux", color: "#186E54" },
    { name: "Guides", color: "#1D325A" },
    { name: "Scouts", color: "#015AA9" },
    { name: "Pionniers", color: "#DA1F29" },
    { name: "Clan", color: "#FEB800" },
    { name: "Unité", color: "#000000" },
];

const getSectionColor = (sectionName: string): string => {
    const section = legendItems.find(item => item.name === sectionName);
    return section ? section.color : "#000000";
};


const AgendaBlock = ({ events } : { events : EventData[] }) => {
    const hasHighlight = events.some(event => event.highlight);

    return (
        <Container
            fluid
            className={`p-5 angenda-padding-xl ${hasHighlight ? "" : "pt-4"}`}
            style={{
                backgroundImage: "url('/background7.png')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            {!hasHighlight && (
                <h1 className="text-center mb-4" style={{ fontFamily: "Titan One" }}>
                    Agenda
                </h1>
            )}

            <Row className="g-3">
                {/* Calendrier */}
                <Col xl={10} md={12}>
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="h-100"
                    >
                        <Card className="shadow rounded-4 p-3 border-5 h-100" style={{ borderColor: "#022864" }}>
                            <FullCalendar
                                plugins={[dayGridPlugin, interactionPlugin, bootstrap5Plugin]}
                                initialView="dayGridMonth"
                                themeSystem="bootstrap5"
                                events={events.map((event) => ({
                                    id: event.id.toString(),
                                    title: event.title,
                                    start: event.start_time,
                                    end: event.end_time,
                                    color: getSectionColor(event.section.name),
                                }))}
                                locale="fr"
                                height="auto"
                                dayMaxEventRows={true}
                                headerToolbar={{
                                    left: "today",
                                    center: "title",
                                    right: "prevYear,prev,next,nextYear",
                                }}
                                buttonText={{
                                    today: "Aujourd'hui",
                                    month: "Mois",
                                    week: "Semaine",
                                    day: "Jour",
                                }}
                                firstDay={1}
                                eventClassNames="p-1"
                            />
                        </Card>
                    </motion.div>
                </Col>

                {/* Colonne Légende + Téléchargement */}
                <Col xl={2} md={12}>
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card className="shadow rounded-4 border-5" style={{ borderColor: "#022864" }}>
                            <Card.Body className="text-center">
                                <Card.Title
                                    className="fs-4 pb-2"
                                    style={{ fontFamily: "Titan One", borderBottom: "2px solid #022864" }}
                                >
                                    Légende
                                </Card.Title>
                                <ListGroup
                                    variant="flush"
                                    className="d-flex flex-xl-column flex-md-row flex-wrap justify-content-center align-items-center gap-2"
                                >
                                    {legendItems.map((section) => (
                                        <ListGroupItem
                                            key={section.name}
                                            className="d-flex align-items-center border-0 ps-0"
                                            style={{ minWidth: "120px" }}
                                        >
                                            <span
                                                className="me-2"
                                                style={{
                                                    display: "inline-block",
                                                    width: "16px",
                                                    height: "16px",
                                                    borderRadius: "50%",
                                                    backgroundColor: section.color,
                                                }}
                                            />
                                            {section.name}
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </motion.div>

                    {/* Carte téléchargement */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-3"
                    >
                        <Card className="shadow rounded-4 border-5 h-100" style={{ borderColor: "#022864" }}>
                            <Card.Body className="text-center d-flex flex-column justify-content-between">
                                <Card.Title
                                    className="fs-5 pb-2"
                                    style={{
                                        fontFamily: "Titan One",
                                        borderBottom: "2px solid #022864",
                                    }}
                                >
                                    Télécharger l’agenda
                                </Card.Title>
                                <p>
                                    Cliquez sur le bouton ci-dessous pour télécharger l'agenda complet au format PDF.
                                </p>
                                <Button
                                    className="download-btn d-inline-block text-decoration-none text-white text-center"
                                    style={{ backgroundColor: "#022864", borderColor: "#022864" }}
                                    href="/path/to/agenda.pdf"
                                >
                                    Télécharger l’agenda
                                </Button>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default AgendaBlock;
