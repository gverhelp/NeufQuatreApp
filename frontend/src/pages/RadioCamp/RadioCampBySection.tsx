import { useEffect, useState } from "react";
import { Container, Form, Button, Card, Row, Col, Alert, Spinner, Image, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import axios from "axios";
import { RadioCampData } from '../../types/interfaces';
import "./RadioCamps.css";

const RadioCampBySection = ({ sectionName }: { sectionName: string }) => {
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [radio_camp, setRadioCamp] = useState<RadioCampData>();
    const [error, setError] = useState("");

    // Pour le modal d’image
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<{ src: string; caption?: string } | null>(null);

    const handleImageClick = (src: string, caption?: string) => {
        setSelectedImage({ src, caption });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    // Vérifie le mot de passe
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await axios.post(`http://localhost:8000/api/radio-camps/${sectionName.toLowerCase()}/verify-password/`, {
                password,
            });

            if (response.data.success) {
                setValidated(true);
                localStorage.setItem(`radioCampValidated-${sectionName}`, "true");
            } else {
                setError(response.data.error);
            }
        } catch (err) {
            setError("Aucun Radio Camp n'est disponible pour cette section actuellement.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setValidated(false);
        setRadioCamp(undefined);

        const isValidated = localStorage.getItem(`radioCampValidated-${sectionName}`);
        
        if (isValidated === "true") {
            setValidated(true);
        }
    }, [sectionName]);

    useEffect(() => {
        setPassword("");
        setError("");
    }, [sectionName]);

    // Une fois validé, fetch les posts
    useEffect(() => {
        if (!validated) return;

        const fetchPosts = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/radio-camps/${sectionName.toLowerCase()}`);

                setRadioCamp(response.data);
            } catch (err) {
                if ((err as any).response?.status === 404) {
                    setError("Aucun Radio Camp n'est disponible pour cette section actuellement.");
                } else {
                    setError("Impossible de récupérer les publications.");
                }
            }
        };

        fetchPosts();
    }, [validated, sectionName]);


    // Affichage de la demande de mot de passe
    if (!validated) {
        return (
            <Container fluid className="py-5" style={{ height: "800px", backgroundImage: "url('/background7.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                <Container className="d-flex justify-content-center align-items-center h-100">
                    <Card className="p-4 shadow-lg border-5" style={{ width: "700px", borderColor: "#022864" }}>
                        <h2 className="text-center mb-3" style={{ fontFamily: "Titan One" }}>
                            Accès au Radio Camp {sectionName}
                        </h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="password" className="mb-3">
                                <Form.Label>
                                    <p className="fs-6 text-center">
                                        Radio camp est un outil mis à la disposition des parents pour que ces derniers puissent suivre les aventures de leurs enfants durant le camp.
                                        <br />
                                        Pour y accéder, il vous suffit d'introduire le mot de passe fourni au préalable par le Staff d'Unité.
                                        <br />
                                        Si vous n'avez pas reçu de mot de passe, n'hésitez pas à les contacter. Vous trouverez leurs coordonnées <a href="/sections/unite">ici</a>.
                                    </p>
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Entrez le mot de passe"
                                />
                            </Form.Group>
                            <div className="d-grid">
                                <Button className="validate-btn text-white text-center" type="submit" disabled={loading} style={{ backgroundColor: "#022864", borderColor: "#022864" }}>
                                    {loading ? <Spinner animation="border" size="sm" /> : "Valider"}
                                </Button>
                            </div>
                        </Form>
                        {error && <Alert variant="warning" className="mt-3">{error}</Alert>}
                    </Card>
                </Container>
            </Container>
        );
    }

    // Affichage des posts
    return (
        <Container fluid className="py-4" style={{ backgroundImage: "url('/background7.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>
            <Container>
            <h1 className="text-center" style={{ fontFamily: "Titan One" }}>
                {radio_camp?.title} - {sectionName}
            </h1>
            <h4 className="text-center text-muted mb-4" style={{ fontFamily: "Titan One" }}>
                {radio_camp?.start_date && new Date(radio_camp.start_date).toLocaleString("fr-BE", { dateStyle: "short" })}
                {" - "} 
                {radio_camp?.end_date && new Date(radio_camp.end_date).toLocaleString("fr-BE", { dateStyle: "short" })}
            </h4>
            </Container>

            {radio_camp?.posts?.length === 0 ? (
                <Container>
                    <Alert variant="primary" className="text-center">
                        <h4 className="text-center">Aucun post pour le moment.</h4>
                        <div className="text-center">Venez nous voir plus tard !</div>
                    </Alert>
                </Container>
            ) : (
                <Row className="g-4">
                    {radio_camp?.posts.map((post, index) => (
                        <Col md={12} key={post.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="h-100"
                            >
                                <Card className="h-100 shadow rounded-3 border-5" style={{ borderColor: "#022864" }}>
                                    <Card.Body>
                                        <Card.Title className="fs-3 mb-2" style={{ fontFamily: "Titan One" }}>
                                            {post.title}
                                        </Card.Title>
                                        <Card.Subtitle className="mb-4 text-muted">{post.date}</Card.Subtitle>
                                        <Card.Text className="border-top-0 border-start-0 border-end-0 pb-2" style={{ border: "2px, solid, #022864" }}>{post.content}</Card.Text>
                                        {post.photos.length > 0 && (
                                            <Row className="g-2">
                                                {post.photos.map((photo) => (
                                                    <Col xs={12} sm={6} md={4} lg={2} key={photo.id}>
                                                        <div
                                                            className="ratio ratio-1x1 photo-container"
                                                            onClick={() => handleImageClick(photo.image, photo.caption)}
                                                            style={{ cursor: "pointer" }}
                                                        >
                                                            <Image
                                                                src={photo.image}
                                                                alt={photo.caption || ""}
                                                                rounded
                                                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                                            />
                                                        </div>
                                                        {photo.caption && (
                                                            <small className="d-block text-muted mt-1">{photo.caption}</small>
                                                        )}
                                                    </Col>
                                                ))}
                                            </Row>
                                        )}
                                        {post.videos.length > 0 && (
                                            <Row className="g-2 mt-1">
                                                {post.videos.map((video) => (
                                                    <Col xs={12} sm={6} md={4} lg={2} key={video.id}>
                                                        <div
                                                            className="ratio ratio-16x9 photo-container"
                                                        >
                                                            <video
                                                                controls
                                                                style={{ width: "100%", borderRadius: "6px" }}
                                                            >
                                                                <source src={video.video} type="video/mp4" />
                                                                Votre navigateur ne supporte pas les vidéos HTML5.
                                                            </video>
                                                        </div>
                                                        {video.caption && (
                                                            <small className="d-block text-muted mt-1">{video.caption}</small>
                                                        )}
                                                    </Col>
                                                ))}
                                            </Row>
                                        )}
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            )}

            {/* MODAL pour image */}
            <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                <Modal.Body className="p-0 text-center">
                    {selectedImage && (
                        <>
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.caption || ""}
                                fluid
                                style={{ maxHeight: "80vh", objectFit: "contain", width: "100%", backgroundColor: "black" }}
                            />
                            {selectedImage.caption && (
                                <div className="text-muted m-2 fs-6">{selectedImage.caption}</div>
                            )}
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default RadioCampBySection;
