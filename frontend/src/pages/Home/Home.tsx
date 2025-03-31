import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'
import ContentBlock from '../../components/ContentBlock';
import ParallaxBlock from '../../components/ParallaxBlock';

interface AccueilItem {
    id: number;
    titre: string;
    description: string;
    image: string;
}
  
const Home: React.FC = () => {
    const [accueilItems, setAccueilItems] = useState<AccueilItem[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            // setLoading(true);

            try {
                const response = await axios.get<AccueilItem[]>('http://127.0.0.1:8000/api/accueil/');
                const data: AccueilItem[] = response.data;
                
                console.log(data);

                setAccueilItems(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
                // setError("Impossible de charger les données");
            } finally {
                // setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <ContentBlock 
                bgImg="background1.png"
                title={accueilItems[0]?.titre}
                text={accueilItems[0]?.description}
                imgSrc={accueilItems[0]?.image}
                reverse = {false}
            />

            <ParallaxBlock />

            <ContentBlock
                bgImg="background2.png" 
                title={accueilItems[1]?.titre}
                text={accueilItems[1]?.description}
                imgSrc={accueilItems[1]?.image}
                reverse = {true}
            />
        </>
    );
};
  
export default Home;