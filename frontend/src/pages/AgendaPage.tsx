import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SectionEventsCards from "../components/SectionEventsCards";
import "../styles/AgendaPage.css"
import AgendaBlock from "../components/AgendaBlock";
import HightlightEventBlock from "../components/HightlightEventBlock";
import { EventData } from "../types/interfaces";


const AgendaPage = () => {
    const [events, setEvents] = useState<EventData[]>([]);
    const baseURL = import.meta.env.VITE_API_URL;
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // setLoading(true);
                const response = await axios.get(`${baseURL}/events/`);
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
            className="p-0"
        >
            <HightlightEventBlock events={events}/>

            <AgendaBlock events={events}/>

            <Container fluid className="py-3 text-center sticky-container sticky-top" style={{ backgroundColor: "#022864", zIndex: 1100 }}>
                <div className="fs-2 text-white"
                    style={{ 
                        fontFamily: "Titan One", 
                        color: "white", 
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" 
                    }}
                >
                    Agenda détaillé par section
                </div>
            </Container>

            <SectionEventsCards events={events} />

        </Container>
    );
};

export default AgendaPage;