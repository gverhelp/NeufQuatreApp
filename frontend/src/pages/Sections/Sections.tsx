import './Sections.css';
import { Container, Row, Col } from 'react-bootstrap';
import ControlledCarousel from '../../components/SectionsComponents/ControlledCarousel';


function Sections() {

    return (
        <Container fluid className="p-0">

            <ControlledCarousel/>

            <Container fluid className="py-5 overflow-x-hidden d-flex justify-content-center" style={{ backgroundImage: "url('background.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>

                <Container>

                    <Row className="g-4">
                        <Col md={12} className="text-center">
                            <div className="group-card" data-group="baladins">
                                <h1 className="fs-3" style={{ fontFamily: "Titan One" }}>Baladins</h1>
                                <p className="fs-4 fw-medium">Enfants de 6 à 8 ans (mixte)</p>
                            </div>
                        </Col>

                        <Col md={6} className="text-center">
                            <div className="group-card" data-group="lutins">
                                <h1 className="fs-3" style={{ fontFamily: "Titan One" }}>Lutins</h1>
                                <p className="fs-4 fw-medium">Filles de 8 à 12 ans</p>
                            </div>
                        </Col>

                        <Col md={6} className="text-center">
                            <div className="group-card" data-group="louveteaux">
                                <h1 className="fs-3" style={{ fontFamily: "Titan One" }}>Louveteaux</h1>
                                <p className="fs-4 fw-medium">Garçons de 8 à 12 ans</p>
                            </div>
                        </Col>

                        <Col md={6} className="text-center">
                            <div className="group-card" data-group="guides">
                                <h1 className="fs-3" style={{ fontFamily: "Titan One" }}>Guides</h1>
                                <p className="fs-4 fw-medium">Filles de 12 à 16 ans</p>
                            </div>
                        </Col>

                        <Col md={6} className="text-center">
                            <div className="group-card" data-group="scouts">
                                <h1 className="fs-3" style={{ fontFamily: "Titan One" }}>Scouts</h1>
                                <p className="fs-4 fw-medium">Garçons de 12 à 16 ans</p>
                            </div>
                        </Col>

                        <Col md={12} className="text-center">
                            <div className="group-card" data-group="pionniers">
                                <h1 className="fs-3" style={{ fontFamily: "Titan One" }}>Pionniers</h1>
                                <p className="fs-4 fw-medium">Adolescents de 16 à 18 ans (mixte)</p>
                            </div>
                        </Col>

                        <Col md={12} className="text-center">
                            <div className="group-card" data-group="unité">
                                <h1 className="fs-3" style={{ fontFamily: "Titan One" }}>Unité</h1>
                                <p className="fs-4 fw-medium">Les chefs d'Unité</p>
                            </div>
                        </Col>
                    </Row>

                </Container>

            </Container>

        </Container>
    );
};

export default Sections;
