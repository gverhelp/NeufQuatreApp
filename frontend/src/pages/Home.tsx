import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface AccueilItem {
    id: number;
    titre: string;
    description: string;
    image: string;
  }
  
  const Home: React.FC = () => {
    const [data, setData] = useState<AccueilItem[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get<AccueilItem[]>('http://127.0.0.1:8000/api/accueil/');
          setData(response.data);
        } catch (error) {
          console.error('Erreur lors de la récupération des données :', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <Container className="mt-4">
        <h2>Bienvenue sur notre site scout</h2>
        <Row>
          {data.map(item => (
            <Col key={item.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.image} alt={item.titre} />
                <Card.Body>
                  <Card.Title>{item.titre}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default Home;

// const Home = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/accueil/')
//       .then(response => setData(response.data))
//       .catch(error => console.error('Erreur lors de la récupération des données :', error));
//   }, []);

//   return (
//     <Container className="mt-4">
//       <h2>Bienvenue sur notre site scout</h2>
//       <Row>
//         {data.map(item => (
//           <Col key={item.id} md={4} className="mb-4">
//             <Card>
//               <Card.Img variant="top" src={item.image} alt={item.titre} />
//               <Card.Body>
//                 <Card.Title>{item.titre}</Card.Title>
//                 <Card.Text>{item.description}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Home;