import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

interface CarouselBlockProps {
    images: string[];
    captions: string[];
}

function CarouselBlock(carouselBlockProps: CarouselBlockProps) {
    const { images, captions } = carouselBlockProps;

    return (
        <Container fluid className="p-0">
            <Carousel style={{ height: "55vh" }} interval={3000}>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <Image
                            fluid
                            src={image}
                            className="d-block w-100"
                            style={{ height: "55vh", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h3>{captions[index]}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}
  
  export default CarouselBlock;