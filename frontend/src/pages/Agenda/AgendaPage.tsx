import axios from "axios";
import { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import "@fullcalendar/bootstrap5";
import { motion } from "framer-motion";

import { Container, Row, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { EventData } from "../../types/interfaces";


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


const AgendaPage = () => {
    const [events, setEvents] = useState<EventData[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // setLoading(true);
                const response = await axios.get("http://localhost:8000/api/events/");
                const data: EventData[] = response.data;

                if (data) {
                    setEvents(data);
                }

            } catch (err) {
                console.error("Erreur lors de la récupération des événements", err);
                // setError("Impossible de charger les données");
            } finally {
                // setLoading(false);
            }
        };

        fetchEvents();
    }, []);


    return (
        <Container
            fluid
            className="p-5"
            style={{
                backgroundImage: "url('/background2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            <Container>
                <h1 className="text-center mb-4" style={{ fontFamily: "Titan One" }}>
                    Agenda
                </h1>

                <Row className="g-3">
                    {/* Calendrier */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="p-0"
                    >
                        <Card className="shadow rounded-4 p-3 border-0">
                            <FullCalendar
                                plugins={[dayGridPlugin, interactionPlugin, bootstrap5Plugin]}
                                initialView="dayGridMonth"
                                themeSystem="bootstrap5"
                                events={events.map(event => ({
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
                            />
                        </Card>
                    </motion.div>

                    {/* Légende */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="p-0"
                    >
                        <Card className="shadow rounded-4 border-0">
                            <Card.Body className="text-center">
                                <Card.Title style={{ fontFamily: "Titan One" }}>Légende</Card.Title>
                                <ListGroup variant="flush" className="d-flex flex-row flex-wrap justify-content-center gap-3">
                                    {legendItems.map((section) => (
                                        <ListGroupItem key={section.name} className="d-flex align-items-center border-0">
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
                </Row>
            </Container>
        </Container>
    );
};

export default AgendaPage;