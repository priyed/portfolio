import React from "react";
import { motion } from "framer-motion"

const containerVariants = {
  exit: {
      x: "-100vw",
      transition: {ease: 'easeInOut'}
  }
}
const Projects = () => {
  return (
    <motion.div className="projects-container container">
        <motion.h1
          initial={{y: -100}}
          animate={{y: 0}}
        >Projects
        </motion.h1>
    </motion.div>
  );
};

export default Projects