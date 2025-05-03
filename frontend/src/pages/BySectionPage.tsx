import { Container, Col, Row, ProgressBar, Spinner, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../styles/Sections.css";
import { SectionData } from "../types/interfaces";
import CarouselBlock from "../components/CarouselBlock";
import ContentBlock from "../components/ContentBlock";
import StaffBlock from "../components/StaffBlock";
import InfoCards from "../components/InfosCards";


const sectionsPath = [
    { name: "Baladins", slug: "baladins", path: "/sections/baladins" },
    { name: "Lutins", slug:"lutins", path: "/sections/lutins" },
    { name: "Louveteaux", slug: "louveteaux", path: "/sections/louveteaux" },
    { name: "Guides", slug: "guides", path: "/sections/guides" },
    { name: "Éclaireurs", slug: "eclaireurs", path: "/sections/eclaireurs" },
    { name: "Pionniers", slug: "pionniers", path: "/sections/pionniers" },
    { name: "Clan", slug: "clan", path: "/sections/clan" },
    { name: "Unité", slug:"unite", path: "/sections/unite" },
];

const BySectionPage = ({ sectionName }: { sectionName: string }) => {
    const baseURL = import.meta.env.VITE_API_URL;
    const [sectionData, setSectionData] = useState<SectionData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSectionData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await axios.get(`${baseURL}/sections/${sectionName.toLowerCase()}`);
                const data: SectionData = response.data;

                if (!data) {
                    throw new Error("Section non trouvée");
                }

                setSectionData(data);
            } catch (err) {
                console.error("Erreur lors de la récupération des données", err);
                setError("Impossible de charger les données de la section.");
            } finally {
                setLoading(false);
            }
        };

        fetchSectionData();
    }, [sectionName]);

    if (loading) {
        return (
            <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: "85vh" }}>
                <Spinner animation="border" variant="primary" />
            </Container>
        );
    }

    if (error) {
        return (
            <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: "85vh" }}>
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

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
                    imgSrc={sectionData.showcaseImage}
                    reverse={false}
                />
            )}

            <Container fluid className="py-3 sticky-container sticky-top" style={{ backgroundColor: "#022864", zIndex: 1050 }}>
                <Row className="g-3">
                    {sectionsPath.map((section, index) => (
                        <Col key={index} className="text-center">
                            <Link to={section.path} className="text-decoration-none text-reset">
                                <div className="group-card-sections rounded-2" data-group={section.slug}>
                                    <h2 className="fs-4 m-0" style={{ fontFamily: "Titan One" }}>
                                        {section.name}
                                    </h2>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>

            {sectionData && (
                <CarouselBlock 
                    images={sectionData.section_images.map(image => image.image)} 
                    captions={sectionData.section_images.map(image => image.title)} 
                />
            )}

            <Container fluid className="py-4 text-center sticky-bottom" style={{ backgroundColor: "#022864", zIndex: 900 }}>
                {sectionName.toLowerCase() !== "unite" && sectionName.toLowerCase() !== "clan" && (
                    <>
                        <h3 className="fs-3 mb-3 text-white" style={{ fontFamily: "Titan One" }}>La section est remplie à</h3>
                        <ProgressBar 
                            animated
                            now={sectionData?.filled} 
                            label={`${sectionData?.filled}%`}
                            className="mx-5 fw-bold"
                            variant="warning"
                        />
                    </>
                )}
            </Container>
                
            <StaffBlock sectionName={sectionName} />

            <Container fluid className="py-3 text-center sticky-container sticky-top" style={{ backgroundColor: "#022864", zIndex: 1100 }}>
                <div className="fs-2 text-white" style={{ fontFamily: "Titan One" }}>Informations pratiques</div>
            </Container>

            {sectionData && <InfoCards sectionData={sectionData} chefsData={sectionData.chefs} />}
        </Container>
    );
};

export default BySectionPage;
