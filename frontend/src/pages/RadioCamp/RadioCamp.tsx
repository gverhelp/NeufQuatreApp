import { useEffect, useState } from "react";
import { Container, Form, Button, Card, Row, Col, Alert, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import axios from "axios";
import { PostData } from '../../types/interfaces';


const RadioCampPage = ({ sectionName }: { sectionName: string }) => {
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState<PostData[]>([]);
    const [error, setError] = useState("");

    // 🔐 Vérifie le mot de passe
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await axios.post(`http://localhost:8000/api/radio-camp/${sectionName.toLowerCase()}/verify-password/`, {
                password,
            });

            if (response.data.success) {
                setValidated(true);
            } else {
                setError("Mot de passe incorrect.");
            }
        } catch (err) {
            setError("Une erreur est survenue lors de la vérification.");
        } finally {
            setLoading(false);
        }
    };

    // 📡 Une fois validé, fetch les posts
    useEffect(() => {
        // if (!validated) return;

        const fetchPosts = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/posts/`);
                setPosts(response.data);
            } catch (err) {
                setError("Impossible de récupérer les publications.");
            }
        };

        fetchPosts();
    }, [validated, sectionName]);

    // 🔐 Affichage de la demande de mot de passe
    if (!validated) {
        return (
            <Container className="mt-5 pt-5" style={{ maxWidth: "500px" }}>
                <Card className="p-4 shadow">
                    <h2 className="text-center mb-4" style={{ fontFamily: "Titan One" }}>
                        Accès au Radio Camp
                    </h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="password" className="mb-3">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Entrez le mot de passe"
                                required
                            />
                        </Form.Group>
                        <div className="d-grid">
                            <Button type="submit" variant="primary" disabled={loading}>
                                {loading ? <Spinner animation="border" size="sm" /> : "Valider"}
                            </Button>
                        </div>
                    </Form>
                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                </Card>
            </Container>
        );
    }

    // ✅ Affichage des posts
    return (
        <Container className="mt-5 pt-5">
            <h1 className="text-center mb-4" style={{ fontFamily: "Titan One" }}>
                Radio Camp - {sectionName}
            </h1>

            {posts.length === 0 ? (
                <p className="text-center">Aucun post pour le moment.</p>
            ) : (
                <Row className="g-4">
                    {posts.map((post, index) => (
                        <Col md={6} key={post.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="h-100 shadow-sm rounded-4">
                                    <Card.Body>
                                        <Card.Title className="fs-4" style={{ fontFamily: "Titan One" }}>
                                            {post.title}
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                                        <Card.Text>{post.content}</Card.Text>
                                        {post.photos.length > 0 && (
                                            <Row className="g-2">
                                                {post.photos.map((photo) => (
                                                    <Col xs={6} key={photo.id}>
                                                        <Card.Img
                                                            src={photo.image}
                                                            alt={photo.caption || ""}
                                                            className="rounded"
                                                        />
                                                        {photo.caption && (
                                                            <small className="d-block text-muted mt-1">
                                                                {photo.caption}
                                                            </small>
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
        </Container>
    );
};

export default RadioCampPage;
