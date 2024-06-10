import logogradient from "./assets/anas.png";
import profile from "./assets/profile.png";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import laravel from "./assets/techstack/laravel.png";
import PLSQL from "./assets/techstack/PLSQL.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import nodejs from "./assets/techstack/nodejs.png";
import express from "./assets/techstack/express.png";
import mongo from "./assets/techstack/mongo.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import projectImage1 from "./assets/projects/project1.png";


export const logos = {
  logogradient: logogradient,
};

export const personalDetails = {
  name: "Anas Akil",
  img: profile,
  cv:'./assets/cv.pdf',
  modelPath: './assets/scene.gltf', 
  about: `Anas Akil, graduate in web full stack   development, I am determined
  to create innovative web solutions thanks to my solid expertise in
  front-end and back-end technologies. My goal is to provide value
  added to stimulating projects.`,
};



export const ExperienceDetails = [
  {
    Position: "MERN Developer Operational Internship",
    Company: `Ark-x`,
    Location: "Rabat",
    Type: "Stage",
    Duration: "feb 2024",
  },

];

export const eduDetails = [
  {  Position: "MERN Full Stack",
    Company: `JOBINTECH`,
    Location: "Rabat",
    Duration: "feb 2024 - Present",
  
  },
  {
  Position: "Full stack Developer ",
    Company: "ISTA",
    Location: "Hay salam,Salé",
    Duration: "2023",
  },  
];

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  laravel: laravel,
  react: react,
  nodejs: nodejs,
  express: express,
  mongo: mongo,
  tailwind: tailwind,
  bootstrap: bootstrap,
  PLSQL: PLSQL,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

export const projectDetails = [
  {
    title: "Media Downloader",
    image: projectImage1,
    description: `Media Downloader is a web application built using React for the frontend and Flask for the backend.
     It allows users to download videos and audio files (MP3) from various online sources. The application provides a user-friendly interface where users can enter the URL of the media they wish to download, select the desired format,
     and initiate the download process.`,
    techstack: "react ,flask",
    previewLink: "https://github.com/anasakil/projet-download",
    githubLink: "https://github.com/anasakil/projet-download",
  },

];

