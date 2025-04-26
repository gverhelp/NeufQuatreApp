import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function BackToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {showButton && (
                <motion.div
                    className="position-fixed"
                    style={{
                        bottom: "30px",
                        left: "30px",
                        zIndex: 2000,
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.button
                        onClick={scrollToTop}
                        className="rounded-circle shadow d-none d-sm-block"
                        style={{
                            width: "60px",
                            height: "60px",
                            backgroundColor: "#022864",
                            border: "3px solid #FFBE0A",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 15px rgba(255,193,7,0.6)",
                        }}
                        whileTap={{ rotate: 360 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.span
                            animate={{ scale: [1, 1.1, 1], opacity: [1, 0.9, 1] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut",
                            }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <FaArrowUp size={20} color="white" />
                        </motion.span>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default BackToTopButton;

