import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


function ParallaxBlock() {
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
            <h2 className="fs-1" style={{ fontFamily: "Titan One", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Le scoutisme</h2>
            <p className="fs-2 fw-medium" style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}>Un mouvement de jeunesse qui veut contribuer à l’éducation des jeunes  pour les aider à devenir des citoyens critiques et engagés.</p>
            </div>
        </div>
    );
};

export default ParallaxBlock;