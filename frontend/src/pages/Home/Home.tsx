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
                bgImg="background.png"
                title="Qui sommes-nous ?" 
                text="La 94ème Saint-Augustin est une unité scout dynamique qui se veut un lieu d'apprentissage, de solidarité et de partage pour les jeunes de toutes générations. Au cœur de notre engagement, l’esprit scout : une méthode éducative qui se fonde sur la responsabilité, l'autonomie, et la fraternité. Nous proposons à chaque jeune de découvrir la nature, de participer à des activités ludiques et enrichissantes, tout en contribuant activement à la vie de la communauté." 
                imgSrc="lol.JPG"
                reverse = {false}
            />

            <ParallaxSection />

            <ContentBlock
                bgImg="background2.png" 
                title="Mon titre 2" 
                text="Un autre texte avec un autre visuel, toujours parfaitement centré." 
                imgSrc="lol.JPG"
                reverse = {true}
            />

            {/* <ContentBlock
                bgColor="#F0F7EE" 
                title="Mon titre 3" 
                text="Encore une section qui suit le design épuré et moderne." 
                imgSrc="lol.JPG"
                reverse = {false}
            /> */}

            {/* <ContentBlock
                bgColor="#cac2b9" 
                title="Mon titre 4" 
                text="La dernière section qui suit une mise en page cohérente et fluide." 
                imgSrc="lol.JPG"
                reverse = {true}
            /> */}
        </>
    );
};
  
export default Home;