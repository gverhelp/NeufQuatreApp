import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import CarouselBlock from "../../components/CarouselBlock";
import { SectionImagesData } from "../../types/interfaces";
import './Sections.css';


const sections = [
    { name: "Baladins", description: "Enfants de 6 à 8 ans (mixte)", path: "/sections/baladins" },
    { name: "Lutins", description: "Filles de 8 à 12 ans", path: "/sections/lutins" },
    { name: "Louveteaux", description: "Garçons de 8 à 12 ans", path: "/sections/louveteaux" },
    { name: "Guides", description: "Filles de 12 à 16 ans", path: "/sections/guides" },
    { name: "Scouts", description: "Garçons de 12 à 16 ans", path: "/sections/scouts" },
    { name: "Pionniers", description: "Adolescents de 16 à 18 ans (mixte)", path: "/sections/pionniers" },
    { name: "Clan", description: "Les chefs à la retraite", path: "/sections/clan" },
    { name: "Unité", description: "Les chefs d'Unité", path: "/sections/unité" },
];


const Sections = () => {
    const [sectionImages, setSectionImages] = useState<SectionImagesData[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSectionImages = async () => {
            try {
                // setLoading(true);

                const response = await axios.get("http://localhost:8000/api/section-images/");
                const data: SectionImagesData[] = response.data;
                const selectedImages = data.filter(image => image.section.name === "Global")
                // .map(image => image.image)
                
                if (selectedImages) {
                    setSectionImages(selectedImages);
                }
            } catch (err) {
                console.error("Erreur lors de la récupération des images", err);
                // setError("Impossible de charger les données");
            } finally {
                // setLoading(false);
            }
        };

        fetchSectionImages();
    }, []);


    return (
        <Container fluid className="p-0">
            <CarouselBlock 
                images={sectionImages.map(image => image.image)}
                captions={sectionImages.map(image => image.title)}
            />

            <Container 
                fluid 
                className="py-5 overflow-x-hidden d-flex justify-content-center" 
                style={{ backgroundImage: "url('background1.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}
            >
                <Container>
                    <Row className="g-4">
                        {sections.map((section, index) => (
                            <Col 
                                key={index} 
                                md={["Baladins", "Pionniers", "Clan", "Unité"].includes(section.name) ? 12 : 6} 
                                className="text-center"
                            >
                                <motion.div
                                    initial={{ x: -100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <Link to={section.path} className="text-decoration-none text-reset">
                                        <div className="group-card" data-group={section.name.toLowerCase()}>
                                            <h1 className="fs-3" style={{ fontFamily: "Titan One" }}>{section.name}</h1>
                                            <p className="fs-4 fw-medium">{section.description}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        </Container>
    );
};

export default Sections;