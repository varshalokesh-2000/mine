import { motion } from "framer-motion";

const BloomingRose = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.9 }}
      style={{
        width: 100,
        height: 100,
        background: "pink",
        borderRadius: "50%",
      }}
    >
      🌹
    </motion.div>
  );
};

export default BloomingRose;
