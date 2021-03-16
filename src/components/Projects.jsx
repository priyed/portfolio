import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faExternalLinkSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Projects.css";
import projects from "../assets/projectlist";
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
          {projects.map((project) => {
            return (
              <div key={project.id} className="project-card">
                <strong>{project.title}</strong>
                <p>{project.description}</p>
                <div className="project-anchors">
                  <a href={project.live}>
                    <FontAwesomeIcon
                      icon={faExternalLinkSquareAlt}
                      className="link-icon"
                    />
                  </a>
                  <a href={project.code} >
                    <FontAwesomeIcon icon={faGithub} className="link-icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Zoom>
    </div>
  );
};

export default Projects;
