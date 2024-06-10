import React from "react";
import { motion } from "framer-motion";
import { techStackDetails } from "../Details";
import VantaBackground from "../Components/VantaBackground";

function Technologies() {
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2, duration: 0.5 },
    }),
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2 + 0.1, duration: 0.5 },
    }),
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 + 0.5, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <VantaBackground />
      <motion.main
        className="container mx-auto max-width pt-10 pb-20"
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.section
          variants={sectionVariants}
          custom={0}
        >
          <motion.h1
            variants={headingVariants}
            custom={0}
            className="text-2xl text-white md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Technologies Stack
          </motion.h1>
        
          <motion.div
            className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6"
            variants={fadeInUpVariants}
          >
            {Object.entries(techStackDetails).map(([tech, src], i) => (
              <motion.img
                key={tech}
                src={src}
                title={tech}
                alt={tech}
                variants={fadeInUpVariants}
                custom={i}
              />
            ))}
          </motion.div>
        </motion.section>
      </motion.main>
    </div>
  );
}

export default Technologies;
