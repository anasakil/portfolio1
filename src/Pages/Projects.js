import React from "react";
import { motion } from "framer-motion";
import Project from "../Components/Project";
import { projectDetails } from "../Details";
import VantaBackground from "../Components/VantaBackground";

function Projects() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <VantaBackground />
      <main className="container mx-auto max-width pt-10 mb-20" style={{ position: 'relative', zIndex: 1 }}>
        <section>
          <h1 className="text-2xl text-white md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Projects
          </h1>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10"
            initial="hidden"
            animate="visible"
          >
            {projectDetails.map((project, index) => (
              <motion.div
                custom={index}
                variants={variants}
                key={project.title}
              >
                <Project
                  title={project.title}
                  image={project.image}
                  description={project.description}
                  techstack={project.techstack}
                  previewLink={project.previewLink}
                  githubLink={project.githubLink}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default Projects;
