import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/Home.css";


interface ContentBlockProps {
    bgColor?: string;
    bgImg?: string;
    title: string;
    subtitle?: string;
    text: string;
    imgSrc: string;
    reverse?: boolean;
}

function ContentBlock({ bgColor = "", bgImg = "", title, subtitle = "", text, imgSrc, reverse = false }: ContentBlockProps) {

    const containerStyle = bgImg 
        ? { backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center center' }
        : { backgroundColor: bgColor };
  
    return (
        <Container fluid className="p-5 d-flex justify-content-center" style={containerStyle}>
            <Row className="align-items-center">

                <Col lg={6} className={`d-flex justify-content-center colTextBlock ${reverse ? "order-lg-2" : "order-lg-1"}`}>
                    <motion.div
                        initial={{ x: reverse ? 30 : -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Image fluid rounded src={imgSrc} />
                    </motion.div>
                </Col>

                <Col lg={6} className={`d-flex align-items-center colTextBlock ${reverse ? "order-lg-1 justify-content-lg-end" : "order-lg-2"}`}>
                    <motion.div
                        initial={{ x: reverse ? -30 : 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`${reverse ? "colTextMotionRight" : "colTextMotionLeft"}`}
                    >
                        <div className="p-3 w-100" style={{ maxWidth: "600px" }}>
                            <h1 className={`colTextTitle ${ subtitle ? "pb-0" : "pb-3" }`} style={{ fontFamily: "Titan One" }}>{title}</h1>
                            {subtitle && <h2 className="pb-2 fs-4 colTextTitle" style={{ fontFamily: "Titan One" }}>{subtitle}</h2>}
                            <p className="fw-semibold colTextText" style={{ fontFamily: "Roboto" }}>{text}</p>
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContentBlock;