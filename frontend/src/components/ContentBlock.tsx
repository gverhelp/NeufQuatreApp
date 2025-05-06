import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/Home.css";


interface ContentBlockProps {
    bgColor?: string;
    bgImg?: string;
    title: string;
    text: string;
    imgSrc: string;
}

function ContentBlock({ bgColor = "", bgImg = "", title, text, imgSrc }: ContentBlockProps) {

    const containerStyle = bgImg 
        ? { backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center center' }
        : { backgroundColor: bgColor };
  
    return (
        <Container fluid className="p-5 d-flex justify-content-center" style={containerStyle}>
            <Row className="align-items-center flex-column flex-md-row">

                <Col lg={6} className="d-flex justify-content-center order-lg-1">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Image fluid rounded src={imgSrc}/>
                    </motion.div>
                </Col>

                <Col lg={6} className="d-flex align-items-center order-lg-2 colTextBlock">
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="colTextMotion"
                    >
                        <div className="p-3 w-100" style={{ maxWidth: "600px" }}>
                            <h1 className="pb-3 colTextTitle" style={{ fontFamily: "Titan One" }}>{title}</h1>
                            <p className="fw-semibold colTextText" style={{ fontFamily: "Roboto" }}>{text}</p>
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContentBlock;