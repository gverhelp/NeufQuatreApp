import { Container, Col, Row, ProgressBar } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Sections.css";

import { SectionData, SectionImagesData, ChefData } from "../../types/interfaces";
import CarouselBlock from "../../components/CarouselBlock";
import ContentBlock from "../../components/ContentBlock";
import StaffBlock from "../../components/StaffBlock";
import InfoCards from "../../components/InfosCards";


interface Section {
    name: string;
    path: string;
}

const sections: Section[] = [
    { name: "Baladins", path: "/sections/baladins" },
    { name: "Lutins", path: "/sections/lutins" },
    { name: "Louveteaux", path: "/sections/louveteaux" },
    { name: "Guides", path: "/sections/guides" },
    { name: "Scouts", path: "/sections/scouts" },
    { name: "Pionniers", path: "/sections/pionniers" },
    { name: "Clan", path: "/sections/clan" },
    { name: "Unité", path: "/sections/unité" },
];

const BySectionPage = ({ sectionName }: { sectionName: string }) => {
    const [sectionData, setSectionData] = useState<SectionData | null>(null);
    const [sectionImages, setSectionImages] = useState<SectionImagesData[]>([]);
    const [chefsData, setChefsData] = useState<ChefData[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSectionData = async () => {
            try {
                // setLoading(true);

                const response = await axios.get("http://localhost:8000/api/sections/");
                const data: SectionData[] = response.data;
                const selectedSection = data.find(section => section.name.toLowerCase() === sectionName.toLowerCase());
                
                if (!selectedSection) {
                    throw new Error("Section non trouvée");
                }
                
                setSectionData(selectedSection);
            } catch (err) {
                console.error("Erreur lors de la récupération des images", err);
                // setError("Impossible de charger les données");
            } finally {
                // setLoading(false);
            }
        };

        const fetchSectionImages = async () => {
            try {
                // setLoading(true);

                const response = await axios.get("http://localhost:8000/api/section-images/");
                const data: SectionImagesData[] = response.data;
                const selectedImages = data.filter(image => image.section.name.toLowerCase() === sectionName.toLowerCase())
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

        const fetchChefsData = async () => {
            try {
                // setLoading(true);

                const response = await axios.get("http://localhost:8000/api/chefs/");
                const data: ChefData[] = response.data;
                const selectedChefs = data.filter(member => member.section.name.toLowerCase() === sectionName.toLowerCase());
                
                if (!selectedChefs) {
                    throw new Error("Chef non trouvé");
                }
                
                setChefsData(selectedChefs);
            } catch (err) {
                console.error("Erreur lors de la récupération des images", err);
                // setError("Impossible de charger les données");
            } finally {
                // setLoading(false);
            }
        };

        fetchChefsData();
        fetchSectionData();
        fetchSectionImages();
    }, [sectionName]);


    return (
        <Container fluid className="p-0">

            {sectionData && (
                <ContentBlock
                    bgImg="/background5.png"
                    title={( () => { 
                        if (sectionData.name === "Unité") {
                            return "L'Unité";
                        } else if (sectionData.name === "Clan") {
                            return "Le Clan";
                        } else {
                            return `Les ${sectionData.name}`;
                        }
                    })()}
                    text={sectionData.description} 
                    imgSrc={sectionData?.sectionImage}
                    reverse={false}
                />
            )}

            <Container fluid className="py-3" /*sticky-container sticky-top*/ style={{ backgroundColor: "#022864" /*, zIndex: 1050*/ }}>
                <Row className="g-3">
                    {sections
                        .filter(section => section.name !== sectionName)
                        .map((section, index) => (
                            <Col key={index} className="text-center">
                                <Link to={section.path} className="text-decoration-none text-reset">
                                    <div className="group-card" data-group={section.name.toLowerCase()}>
                                        <h2 className="fs-4 m-0" style={{ fontFamily: "Titan One" }}>
                                            {section.name}
                                        </h2>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                </Row>
            </Container>

            <CarouselBlock images={sectionImages.map(image => image.image)} captions={sectionImages.map(image => image.title)} />

            <Container fluid className="py-4 text-center sticky-bottom" style={{ backgroundColor: "#022864", zIndex: 900 }}>
                <h3 className="fs-3 mb-3 text-white" style={{ fontFamily: "Titan One" }}>La section est remplie à</h3>
                    <ProgressBar 
                        animated
                        now={sectionData?.filled} 
                        label={`${sectionData?.filled}%`}
                        className="mx-5 fw-bold"
                        variant="warning"
                    />
            </Container>
                
            <StaffBlock sectionName={sectionName} />

            <Container fluid className="py-3 text-center" /*sticky-container sticky-top*/ style={{ backgroundColor: "#022864" /*, zIndex: 1100*/ }}>
                <div className="fs-2 text-white" style={{ fontFamily: "Titan One" }}>Informations pratiques</div>
            </Container>

            {sectionData && <InfoCards sectionData={sectionData} chefsData={chefsData} />}

        </Container>
    );
};

export default BySectionPage;
