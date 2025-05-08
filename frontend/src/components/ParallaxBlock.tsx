import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../styles/Home.css";
import { AccueilButton } from "../types/interfaces";


interface ParallaxBlockProps {
    buttons: AccueilButton[];
}

const ParallaxBlock: React.FC<ParallaxBlockProps> = ({ buttons }) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);


    return (
        <div ref={ref} className="position-relative text-center text-white overflow-hidden">
            <motion.img
                src="background4.jpeg"
                alt="Parallax Background"
                className="img-fluid w-100"
                style={{ height: "70vh", objectFit: "cover", y }}
            />
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", zIndex: 1 }}
            ></div>
            <div className="position-absolute top-50 start-50 translate-middle w-75 text-white" style={{ zIndex: 2 }}>
                <motion.div
                    className="fs-1"
                    style={{ fontFamily: "Titan One", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    94ème Unité Saint-Augustin
                </motion.div>
                <motion.div
                    className="fs-2 fw-medium"
                    style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                >
                    Probably the best Unité in the world.
                </motion.div>
                <motion.div 
                    className="mt-4 d-flex flex-column flex-md-row align-items-center justify-content-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                >
                    <a 
                        href={buttons[0] ? buttons[0].link : "#"} 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="home-btn rounded-2 d-inline-block text-decoration-none text-center mb-3 mb-md-0 me-md-3"
                        style={{ 
                            width: "200px",
                            fontFamily: "Titan One", 
                            color: "white", 
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" 
                        }}
                    >
                        S'inscrire
                    </a>
                    <a 
                        href={buttons[1] ? buttons[1].link : "#"} 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="home-btn rounded-2 d-inline-block text-decoration-none text-center"
                        style={{ 
                            width: "200px",
                            fontFamily: "Titan One", 
                            color: "white", 
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" 
                        }}
                    >
                        Nous contacter
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default ParallaxBlock;