import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { AccueilItem } from '../types/interfaces';
import ContentBlock from '../components/ContentBlock';
import ParallaxBlock from '../components/ParallaxBlock';
import { Container, Spinner, Alert } from 'react-bootstrap';

const Home: React.FC = () => {
    const baseURL = import.meta.env.VITE_API_URL;
    const [accueilItems, setAccueilItems] = useState<AccueilItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get<AccueilItem[]>(`${baseURL}/accueil/`);
                const data: AccueilItem[] = response.data;

                setAccueilItems(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
                setError("Impossible de charger les données");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: "85vh" }}>
                <Spinner animation="border" variant="primary" />
            </Container>
        )
    }

    if (error) {
        return (
            <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: "85vh" }}>
                <Alert variant="danger">{error}</Alert>
            </Container>
        )
    }

    return (
        <>
            <ContentBlock 
                bgImg="background5.png"
                title={accueilItems[0]?.titre}
                text={accueilItems[0]?.description}
                imgSrc={accueilItems[0]?.image}
                reverse={false}
            />

            <ParallaxBlock/>

            <ContentBlock
                bgImg="background7.png" 
                title={accueilItems[1]?.titre}
                text={accueilItems[1]?.description}
                imgSrc={accueilItems[1]?.image}
                reverse={true}
            />
        </>
    );
};
  
export default Home;