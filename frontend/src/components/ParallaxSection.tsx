import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const ParallaxSection: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={ref} className="position-relative text-center text-white overflow-hidden">
            <div>
                <motion.img
                    src="lol.JPG"
                    alt="Parallax Background"
                    className="img-fluid w-100"
                    style={{ height: "600px", objectFit: "cover", y }}
                />
                <div className="position-absolute top-50 start-50 translate-middle w-75" style={{ color: "#0F7EE"}}>
                    <h2 className="fs-1 fw-bold">Le scoutisme</h2>
                    <p className="fs-4">Un mouvement de jeunesse qui veut contribuer à l’éducation des jeunes  pour les aider à devenir des citoyens critiques et engagés.</p>
                </div>
            </div>
        </div>
    );
};

export default ParallaxSection;