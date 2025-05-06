import { Container, Image } from "react-bootstrap";

function ImageBlock() {


    return (
        <Container fluid className="overflow-hidden text-center text-white px-0 position-relative">
            <Image
                fluid
                src="background8.jpeg"
                alt="Image background"
                className="w-100 object-fit-cover"
                style={{ height: "70vh" }}
            />
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", zIndex: 1 }}
            ></div>
            <div className="position-absolute top-50 start-50 translate-middle w-75 text-white" style={{ zIndex: 2 }}>
                <h2 className="fs-1" style={{ fontFamily: "Titan One", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Le scoutisme</h2>
                <p className="fs-2 fw-medium" style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}>Un mouvement de jeunesse qui veut contribuer à l’éducation des jeunes  pour les aider à devenir des citoyens critiques et engagés.</p>
            </div>
        </Container>
    );
};

export default ImageBlock;