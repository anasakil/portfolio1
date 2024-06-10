import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="container mx-auto py-1 bottom-0 md:left-20 lg:w-3/4 min-w-full"  style={{ backgroundColor: '#23153C', height:'100%'}}>
      <div className="flex justify-center items-center mb-2">
        <a
          href="https://www.linkedin.com/in/anasakil/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white	 mx-2 hover:text-blue-500"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a
          href="https://github.com/anasakil/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white	 mx-2 hover:text-blue-500"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="mailto:farawiakil@gmail.com"
          className="text-white	 mx-2 hover:text-blue-500"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
      <p className="text-xs text-center  dark:text-white	 w-full">
        Designed by{" "}
        <a
          className="font-medium"
          href="https://www.linkedin.com/in/anasakil/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Anas Akil
        </a>
      </p>
    </footer>
  );
}

export default Footer;
