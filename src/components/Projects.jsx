import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="projects-container container" id="projects">
        <FontAwesomeIcon icon={faFlask} className="project-icon" />
        <h4>Projects</h4>
        <h2>Recent Projects & Websites</h2>
        <p className="projects-about">
          I've worked on different kinds of websites and projects, from single page
          applications, business websites and landing pages.
        </p>

        <div className="project-card">
          <div className="image-container">
            <img src="" alt="screenshot of a project I worked on" />
            <h4>Project title</h4>
          </div>
          <div className="stack">
            <p className="chip">React</p>
            <p className="chip">Tailwind</p>
          </div>
          <div className="project-description">
            <p>Project Description</p>
          </div>
        </div>

        <div className="project-card">
          <div className="image-container">
            <img src="" alt="screenshot of a project I worked on" />
            <h4>Project title</h4>
          </div>
          <div className="stack">
            <p className="chip">HTML</p>
            <p className="chip">CSS</p>
            <p className="chip">JavaScript</p>
          </div>
          <div className="project-description">
            <p>Project Description</p>
          </div>
        </div>

        <div className="project-card">
          <div className="image-container">
            <img src="" alt="screenshot of a project I worked on" />
            <h4>Project title</h4>
          </div>
          <div className="stack">
            <p className="chip">React</p>
            <p className="chip">Tailwind</p>
          </div>
          <div className="project-description">
            <p>Project Description</p>
          </div>
        </div>

        <div className="project-card">
          <div className="image-container">
            <img src="" alt="screenshot of a project I worked on" />
            <h4>Project title</h4>
          </div>
          <div className="stack">
            <p className="chip">React</p>
            <p className="chip">Tailwind</p>
          </div>
          <div className="project-description">
            <p>Project Description</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
