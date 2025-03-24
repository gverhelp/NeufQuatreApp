import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './Home.css'
import { ContentBlock } from '../../components/ContentBlock';
import { ParallaxSection } from '../../components/ParallaxSection';

// interface AccueilItem {
//     id: number;
//     titre: string;
//     description: string;
//     image: string;
// }
  
const Home: React.FC = () => {
    // const [data, setData] = useState<AccueilItem[]>([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get<AccueilItem[]>('http://127.0.0.1:8000/api/accueil/');
    //             setData(response.data);
                
    //         }   catch (error) {
    //             console.error('Erreur lors de la récupération des données :', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <>
            <ContentBlock 
                bgColor="#7A9CC6" 
                title="Mon titre 1" 
                text="Voici un texte descriptif pour accompagner l’image. Il s’adapte bien à la mise en page et reste lisible sur tous les écrans." 
                imgSrc="lol.JPG"
                reverse = {false}
            />

            <ParallaxSection />

            <ContentBlock
                bgColor="#F0F7EE" 
                title="Mon titre 2" 
                text="Un autre texte avec un autre visuel, toujours parfaitement centré." 
                imgSrc="lol2.JPG"
                reverse = {true}
            />

            <ContentBlock
                bgColor="#FFBE0A" 
                title="Mon titre 3" 
                text="Encore une section qui suit le design épuré et moderne." 
                imgSrc="lol3.JPG"
                reverse = {false}
            />

            <ContentBlock
                bgColor="#cac2b9" 
                title="Mon titre 4" 
                text="La dernière section qui suit une mise en page cohérente et fluide." 
                imgSrc="lol.JPG"
                reverse = {true}
            />
        </>
    );
};
  
export default Home;