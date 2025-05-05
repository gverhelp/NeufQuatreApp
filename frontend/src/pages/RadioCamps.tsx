import { Container, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BsGeoAltFill } from "react-icons/bs";

const RadioCamps = () => {
    const navigate = useNavigate();

    const buttonsDesktop = [
        { label: "Baladins", top: "25%", left: "15%", path: "/radio-camps/baladins", delay: 0 },
        { label: "Lutins", top: "70%", left: "27%", path: "/radio-camps/lutins", delay: 0.3 },
        { label: "Louveteaux", top: "25%", left: "47%", path: "/radio-camps/louveteaux", delay: 0.6 },
        { label: "Guides", top: "50%", left: "48%", path: "/radio-camps/guides", delay: 0.9 },
        { label: "Éclaireurs", top: "22%", left: "70%", path: "/radio-camps/eclaireurs", delay: 1.2 },
        { label: "Pionniers", top: "75%", left: "83%", path: "/radio-camps/pionniers", delay: 1.5 },
    ];

    return (
        <Container
            fluid
            className="position-relative container-map"
            style={{
                backgroundImage: "url('/backgroundMap.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Container className="pt-4">
                <h1 className="text-center"
                    style={{ 
                        fontFamily: "Titan One", 
                        color: "#000000", 
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" 
                    }}
                >
                    Radio Camp
                </h1>
            </Container>

            {/* Affichage desktop */}
            <div className="d-none d-lg-block">
                {buttonsDesktop.map((btn, index) => (
                    <div key={index}>
                        <motion.button
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="fs-4 border-0 rounded-2 position-absolute map-btn"
                            style={{
                                top: btn.top,
                                left: btn.left,
                                fontFamily: "Titan One", 
                                color: "white", 
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" 
                            }}
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                scale: {
                                    duration: 2.5,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    delay: index * 0.2,
                                },
                                y: {
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: index * 0.1,
                                },
                                opacity: {
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: index * 0.1,
                                }
                            }}
                            onClick={() => navigate(btn.path)}
                        >
                            {btn.label}
                        </motion.button>

                        {/* Icône d'épingle */}
                        <motion.div
                            className="position-absolute"
                            style={{
                                top: `calc(${btn.top} + 65px)`,
                                left: `calc(${btn.left} + 45px)`,
                                transform: "translateX(-50%)",
                                color: "#022864",
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.2 + 0.5,
                                duration: 0.4,
                                ease: "easeOut",
                            }}
                        >
                            <BsGeoAltFill size={24} />
                        </motion.div>
                    </div>
                ))}
            </div>


            {/* Affichage mobile */}
            <Container className="d-block d-lg-none p-4 pt-3">
                <Row className="g-3">
                    {buttonsDesktop.map((btn, index) => (
                        <Col key={index} xs={12}>
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    delay: index * 0.1,
                                }}
                            >
                            <Button
                                className="fs-4 map-lg-btn rounded-2 w-100"
                                onClick={() => navigate(btn.path)}
                                style={{ backgroundColor: "#022864", borderColor: "#022864" }}
                            >
                                {btn.label}
                            </Button>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default RadioCamps;

