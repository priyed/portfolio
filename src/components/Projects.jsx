import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import Atom from "../assets/projectimages/AtomClone.PNG";
import justtodo from "../assets/projectimages/justtodo.PNG";
import portfolio from "../assets/projectimages/portfolio.PNG";
import tourist from "../assets/projectimages/tourist.PNG";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="projects-container" id="projects">
        <FontAwesomeIcon icon={faFlask} className="project-icon" />
        <h4>Projects</h4>
        <h2>Recent Projects & Websites</h2>
        <p className="projects-about">
          I've worked on different kinds of websites and projects, from single
          page applications, business websites and landing pages.
        </p>

        
        <div className="projects">
          <div className="column">
            <div className="project-card">
              <img src={Atom} alt="project image" />
              <h4>Project title</h4>
              <div className="stack">
                <p className="chip">React</p>
                <p className="chip">Tailwind</p>
              </div>
              <div className="project-description">
                <p>Project Description</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="project-card">
              <img src={justtodo} alt="screenshot of a project I worked on" />
              <h4>Project title</h4>

              <div className="stack">
                <p className="chip">HTML</p>
                <p className="chip">CSS</p>
                <p className="chip">JavaScript</p>
              </div>
              <div className="project-description">
                <p>Project Description</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="project-card">
              <img src={tourist} alt="screenshot of a project I worked on" />
              <h4>Project title</h4>

              <div className="stack">
                <p className="chip">React</p>
                <p className="chip">Tailwind</p>
              </div>
              <div className="project-description">
                <p>Project Description</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="project-card">
              <img src={portfolio} alt="screenshot of a project I worked on" />
              <h4>Project title</h4>

              <div className="stack">
                <p className="chip">React</p>
                <p className="chip">Tailwind</p>
              </div>
              <div className="project-description">
                <p>Project Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
