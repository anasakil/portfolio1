import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-900">
      <img src={image} alt="" loading="lazy" />
      <div className="bg-dark-card p-4">
        <h1 className="text-white	 font-semibold text-lg pt-1">{title}</h1>
        <p className="text-content pt-4 font-light">{description}</p>
        <h3 className=" text-white	 font-medium pt-4">
          Tech Stack : <span className="font-light">{techstack}</span>
        </h3>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
            <FaExternalLinkAlt
              className=" text-white inline-block min-w-fit"
              size={20}
            />
            <a
              href={previewLink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light text-white"
            >
              Live Preview
            </a>
          </div>
          <div className="flex items-center">
            <FaGithub
              className="text-white	 inline-block min-w-fit"
              size={20}
            />
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light text-white"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;