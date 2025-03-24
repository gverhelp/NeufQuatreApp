import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";


interface ContentBlockProps {
    bgColor: string;
    title: string;
    text: string;
    imgSrc: string;
    reverse?: boolean;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({ bgColor, title, text, imgSrc, reverse = false }) => {
    return (
        <Container fluid className="py-5 overflow-x-hidden d-flex justify-content-center" style={{ backgroundColor: bgColor }}>
            <Row className="align-items-center w-100 flex-column flex-md-row">

                <Col xs={12} md={6} className={`d-flex justify-content-center ${reverse ? "order-md-2" : ""}`}>
                    <motion.div
                        initial={{ x: reverse ? 100 : -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Image fluid src={imgSrc}/>
                    </motion.div>
                </Col>

                <Col xs={12} md={6} className={`${reverse ? "order-md-1" : ""}`}>
                    <motion.div
                        initial={{ x: reverse ? -100 : 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="p-3 w-100" style={{ maxWidth: "600px" }}>
                            <h1>{title}</h1>
                            <p className="fs-5">{text}</p>
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContentBlock;