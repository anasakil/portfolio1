import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { personalDetails } from "../Details";
import VantaBackground from "../Components/VantaBackground";

const { img } = personalDetails;

function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.8 } },
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <VantaBackground />
      <motion.main
        className="container mx-auto max-width section md:flex justify-between items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div variants={textVariants}>
          <motion.h1
            className="text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            variants={textVariants}
          >
            Hi! <br/>My Name is:<br/>
          </motion.h1>
          <motion.h1
            className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            variants={textVariants}
          >
            Anas Akil
          </motion.h1>
          <motion.h2
            className="text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            variants={textVariants}
          >
            Full Stack Developer
          </motion.h2>
        </motion.div>
        <motion.div className="mt-6 md:mt-0" variants={imageVariants}>
          <motion.img className="w-1/2 md:ml-auto" src={img} alt="anas akil" variants={imageVariants} />
        </motion.div>
      </motion.main>
      
    </div>
  );
}

export default Home;
