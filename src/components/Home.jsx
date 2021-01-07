import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
    exit: {
        x: "-100vw",
        transition: {ease: 'easeInOut'}
    }
}

const Home = () => {
        return(
            
            <motion.div className="header"
                initial= {{opacity: 0}}
                animate= {{opacity: 1}}
                transition={{duration: 1.5}}
            >
                <h2>Hello,</h2>
                <h1>I'm Stanley</h1>
                <p>A self taught and passionate front-end developer.</p>
            </motion.div>
            
        )
    }

    /* Make this the main component */

export default Home