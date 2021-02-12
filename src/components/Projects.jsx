import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import "./Projects.css";
import Zoom from "react-reveal/Zoom";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <FontAwesomeIcon icon={faFlask} className="project-icon" />
      <h4>Projects</h4>
      <Zoom top duration={2000}>
        <h2>Recent Projects & Websites</h2>
      </Zoom>

      <Zoom duration={2000}>
        <p className="projects-about">
         Selected websites and projects I've worked on.
        </p>
      </Zoom>

      <Zoom duration={1000}>
        <div className="projects">
          <div className="project-card">
            
            <strong>Atom website clone</strong>
            <p>
              The official website for Atom code editor, is one of my favorite
              ever. This is my shot at trying to build a clone. This was achieved with good ol` HTML and CSS.
            </p>
            <div className="project-anchors">
              <a href="#live"><FontAwesomeIcon icon={faExternalLinkSquareAlt} className="link-icon" /></a>
              <a href="#code"><FontAwesomeIcon icon={faGithub} className="link-icon" /></a>
            </div>
          </div>

          <div className="project-card">
            
            <strong>Just To Do</strong>
            <p>
              Very typical, lol! This is my go at making a simple to-do app.
              Built with React and tailwindcss.
            </p>
            <div className="project-anchors">
              <a href="#live"><FontAwesomeIcon icon={faExternalLinkSquareAlt} className="link-icon" /></a>
              <a href="#code"><FontAwesomeIcon icon={faGithub} className="link-icon" /></a>
            </div>
          </div>

          <div className="project-card">
      
            <strong>Title</strong>
            <p>
              This a landing page for a tourism guide, built entirely with HTML and TailwinCSS.
            </p>
            <div className="project-anchors">
              <a href="#live"><FontAwesomeIcon icon={faExternalLinkSquareAlt} className="link-icon" /></a>
              <a href="#code"><FontAwesomeIcon icon={faGithub} className="link-icon" /></a>
            </div>
          </div>

          <div className="project-card">
            
            <strong>Title</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              adipisci nobis, quisquam at placeat ea nisi ratione quae, vitae
              ducimus ipsa ex deserunt dignissimos tempore, fuga pariatur
              provident quidem? Ipsam.
            </p>
            <div className="project-anchors">
              <a href="#live"><FontAwesomeIcon icon={faExternalLinkSquareAlt} className="link-icon" /></a>
              <a href="#code"><FontAwesomeIcon icon={faGithub} className="link-icon" /></a>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Projects;
