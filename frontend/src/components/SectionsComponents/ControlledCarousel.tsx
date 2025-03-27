import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number): void => {
        setIndex(selectedIndex);
    };
  
    return (
        <Container fluid className="p-0">
            <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: "60vh" }} interval={3000}>
                <Carousel.Item>
                    <Image fluid src="lol.JPG" className="d-block w-100" style={{ height: "60vh", objectFit: "cover" }}/>
                </Carousel.Item>

                <Carousel.Item>
                    <Image fluid src="lol2.JPG" className="d-block w-100" style={{ height: "60vh", objectFit: "cover" }}/>
                </Carousel.Item>
                
                <Carousel.Item>
                    <Image fluid src="lol3.JPG" className="d-block w-100" style={{ height: "60vh", objectFit: "cover" }}/>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
  }
  
  export default ControlledCarousel;