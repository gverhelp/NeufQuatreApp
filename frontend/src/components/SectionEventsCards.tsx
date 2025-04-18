import { Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { BsGeoAltFill, BsCalendarEvent } from "react-icons/bs";
import "../Pages/Agenda/AgendaPage.css";
import { EventData } from "../types/interfaces";
import { motion } from "framer-motion";

const legendItems = [
    { name: "baladins", color: "#00A0DD" },
    { name: "lutins", color: "#CC0739" },
    { name: "louveteaux", color: "#186E54" },
    { name: "guides", color: "#1D325A" },
    { name: "scouts", color: "#015AA9" },
    { name: "pionniers", color: "#DA1F29" },
    { name: "clan", color: "#FEB800" },
    { name: "unité", color: "#000000" },
];

interface Props {
    events: EventData[];
}

const SectionEventsCards: React.FC<Props> = ({ events }) => {
    return (
        <Container
            fluid
            className="p-5"
            style={{
                backgroundImage: "url('/background5.png')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            {events.length === 0 ? (
                <div className="fs-3 text-center" style={{ fontFamily: "Titan One" }}>
                    Aucun évènement pour le moment
                </div>
            ) : (
                <Row className="g-4 justify-content-center">
                    {legendItems.map((section) => {
                        const sectionEvents = events
                        .filter((event) => event.section === section.name)
                        .sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime());

                        if (sectionEvents.length === 0) return null;

                        return (
                            <Col key={section.name} md={6} xl={4}>
                                <motion.div
                                    initial={{ x: -100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="h-100"
                                >
                                    <Card
                                        className="shadow rounded-4 border-5 h-100 section-event-card"
                                        style={{ borderColor: section.color }}
                                    >
                                        <Card.Body>
                                            <Card.Title
                                                className="ps-3 mb-0 fs-4"
                                                style={{ fontFamily: "Titan One", color: section.color }}
                                            >
                                                {section.name}
                                            </Card.Title>
                                            <ListGroup variant="flush">
                                                {sectionEvents.map((event) => (
                                                    <ListGroupItem key={event.id} className="py-3" style={{ borderColor: section.color }}>
                                                        <div className="fw-bold fs-5 mb-1">
                                                            {new Date(event.start_time).toLocaleDateString("fr-BE", {
                                                                weekday: "long",
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            }).replace(/^\w/, c => c.toUpperCase())}
                                                        </div>

                                                        <div className="mb-1 fw-bolder">{event.title}</div>

                                                        {event.description && (
                                                            <div className="text-muted small mb-2">
                                                                {event.description}
                                                            </div>
                                                        )}

                                                        <div className="mb-1 small d-flex align-items-center">
                                                            <BsGeoAltFill className="me-1 text-secondary" />
                                                            {event.location || "Lieu non spécifié"}
                                                        </div>

                                                        <div className="small d-flex align-items-center">
                                                            <BsCalendarEvent className="me-1 text-secondary" />
                                                            {new Date(event.start_time).toLocaleString("fr-BE", {
                                                                dateStyle: "short",
                                                                timeStyle: "short",
                                                            })}
                                                            {" - "}
                                                            {new Date(event.end_time).toLocaleString("fr-BE", {
                                                                dateStyle: "short",
                                                                timeStyle: "short",
                                                            })}
                                                        </div>
                                                    </ListGroupItem>
                                                ))}
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        );
                    })}
                </Row>
            )}
        </Container>
    );
};


export default SectionEventsCards;
