import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Experience from "../Components/Experience";
import DownloadButton from '../Components/DownloadButton';
import VantaBackground from "../Components/VantaBackground";

import { personalDetails, ExperienceDetails, eduDetails } from "../Details";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <VantaBackground />
      <main className="container mx-auto max-width pt-10 pb-20" style={{ position: 'relative', zIndex: 1 }}>
        <section data-aos="fade-right">
          <h1 className="text-2xl text-white md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            About Me
          </h1>
          <a
            href={personalDetails.cv}
            download={personalDetails.cv}
            className="mt-4 inline-block hover:bg-violet-800 text-white font-bold py-2 px-4 rounded border border-white"
          >
            <DownloadButton />
          </a>
          <p className="text-white py-8 lg:max-w-3xl">{personalDetails.about}</p>
        </section>

        <section data-aos="fade-left">
          <h1 className="text-2xl text-white md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Experience
          </h1>
          {ExperienceDetails.map(({ Position, Company, Location, Type, Duration }, index) => (
            <div data-aos="fade-up" data-aos-delay={index * 100} key={index}>
              <Experience 
                position={Position}
                company={Company}
                location={Location}
                duration={Duration}
                className="text-white"
              />
            </div>
          ))}
        </section>

        <section data-aos="fade-right">
          <h1 className="text-2xl pt-10 text-white md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Education
          </h1>
          {eduDetails.map(({ Position, Company, Location, Type, Duration }, index) => (
            <div data-aos="fade-up" data-aos-delay={index * 100} key={index}>
              <Experience
                position={Position}
                company={Company}
                location={Location}
                duration={Duration}
              />
            </div>
          ))}
        </section>

        
      </main>
    </div>
  );
}

export default About;
