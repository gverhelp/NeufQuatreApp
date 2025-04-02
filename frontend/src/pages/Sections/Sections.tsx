import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarouselBlock from "../../components/CarouselBlock";
import { motion } from "framer-motion";
import './Sections.css';

interface Sections {
    name: string;
    description: string;
    path: string;
}

const sections: Sections[] = [
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
    return (
        <Container fluid className="p-0">
            <CarouselBlock 
                images={["lol.JPG", "lol2.JPG", "lol3.JPG"]} 
                captions={["", "", ""]} 
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
                                    initial={{ x: index % 2 ? -100 : 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
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