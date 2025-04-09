import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ChefData } from "../types/interfaces";


const StaffCard = ({ member }: { member: ChefData }) => {
    return (
        <Card className="h-100 overflow-hidden border-0 staff-card">
            <Card.Img variant="top" src={member.image} alt={member.totem} style={{ height: "350px", objectFit: "cover" }} />
            <Card.Body className="text-center text-break overflow-scroll" style={{ height: "400px" }}>
                <Card.Title className="fs-4" style={{ fontFamily: "Titan One" }}>{member.totem}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fs-5">{member.name}</Card.Subtitle>
                <Card.Text className="fs-6">{member.bafouille}</Card.Text>
            </Card.Body>
        </Card>
    );
};


const StaffBlock = ( { sectionName }: { sectionName: string } ) => {
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);
    const [chefsData, setChefsData] = useState<ChefData[]>([]);

    useEffect(() => {
        const fetchSectionData = async () => {
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

        fetchSectionData();
    }, [sectionName]);


    return (
        <Container fluid className="p-5" style={{ backgroundImage: "url('/background1.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>
            <h2 className="text-center mb-4 fs-1" style={{ fontFamily: "Titan One" }}>Les chefs {sectionName === "Unité" ? "d'" : ""}{sectionName}</h2>
            <Row className="g-4 justify-content-center">
                {chefsData.map((member, index) => (
                    <Col key={index} md={6} lg={4} xl={3}>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-100"
                        >
                            <StaffCard member={member} />
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default StaffBlock;