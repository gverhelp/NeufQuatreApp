import { Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { BsGeoAltFill, BsCalendarEvent, BsChevronLeft } from "react-icons/bs";
import "../styles/AgendaPage.css";
import { EventData } from "../types/interfaces";
import { motion } from "framer-motion";
import { useState } from "react";


const sections = [
    { name: "Baladins", slug: "baladins", color: "#00A0DD" },
    { name: "Lutins", slug: "lutins", color: "#CC0739" },
    { name: "Louveteaux", slug: "louveteaux", color: "#186E54" },
    { name: "Guides", slug: "guides", color: "#1D325A" },
    { name: "Éclaireurs", slug: "eclaireurs", color: "#015AA9" },
    { name: "Pionniers", slug: "pionniers", color: "#DA1F29" },
    { name: "Clan", slug: "clan", color: "#FEB800" },
    { name: "Unité", slug: "unite", color: "#000000" },
];

interface Props {
    events: EventData[];
}

const SectionEventsCards: React.FC<Props> = ({ events }) => {
    const [openSections, setOpenSections] = useState<string[]>([]);

    const toggleSection = (slug: string) => {
        setOpenSections((prev) =>
            prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
        );
    };

    return (
        <Container fluid className="p-5 agenda-padding-sm" style={{ backgroundColor: "white" }}>
            {events.length === 0 ? (
                <div className="fs-3 text-center" style={{ fontFamily: "Titan One" }}>
                    Aucun évènement pour le moment
                </div>
            ) : (
                <Row className="g-4">
                    {sections.map((section) => {
                        const sectionEvents = events
                            .filter((event) => event.section === section.slug)
                            .sort(
                                (a, b) =>
                                    new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
                            );

                        if (sectionEvents.length === 0) return null;

                        const isOpen = openSections.includes(section.slug);

                        return (
                            <Col key={section.name} md={6} xl={4}>
                                <motion.div
                                    initial={{ x: -30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                    viewport={{ once: true }}
                                >
                                    <Card
                                        className="shadow rounded-2 border-5 section-event-card h-100 d-flex flex-column"
                                        style={{ borderColor: section.color }}
                                    >
                                        <Card.Header
                                            className="ps-3 mb-0 fs-4 d-flex justify-content-between align-items-center"
                                            style={{
                                                fontFamily: "Titan One",
                                                color: section.color,
                                                cursor: "pointer",
                                            }}
                                            onClick={() => toggleSection(section.slug)}
                                        >
                                            {section.name}
                                            <motion.div
                                                animate={{ rotate: isOpen ? -90 : 0 }}
                                            >
                                                <BsChevronLeft />
                                            </motion.div>
                                        </Card.Header>
                                        <Card.Body className="d-flex flex-column flex-grow-1">
                                            {!isOpen ? (
                                                <div className="text-center text-muted">
                                                    Cliquez pour voir les événements
                                                </div>
                                            ) : (
                                                <ListGroup variant="flush">
                                                    {sectionEvents.map((event) => (
                                                        <ListGroupItem
                                                            key={event.id}
                                                            className="py-3"
                                                            style={{ borderColor: section.color }}
                                                        >
                                                            <div className="fw-bold fs-5 mb-1">
                                                                {new Date(event.start_time)
                                                                    .toLocaleDateString("fr-BE", {
                                                                        weekday: "long",
                                                                        year: "numeric",
                                                                        month: "long",
                                                                        day: "numeric",
                                                                    })
                                                                    .replace(/^\w/, (c) => c.toUpperCase())}
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
                                                                })}{" "}
                                                                -{" "}
                                                                {new Date(event.end_time).toLocaleString("fr-BE", {
                                                                    dateStyle: "short",
                                                                    timeStyle: "short",
                                                                })}
                                                            </div>
                                                        </ListGroupItem>
                                                    ))}
                                                </ListGroup>
                                            )}
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
