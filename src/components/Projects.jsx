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
    <div className="projects-container" id="projects">
      <FontAwesomeIcon icon={faFlask} className="project-icon" />
      <h4>Projects</h4>
      <h2>Recent Projects & Websites</h2>
      <p className="projects-about">
        I've worked on different kinds of websites and projects, from single
        page applications, business websites and landing pages.
      </p>

      <div className="projects">
        <div className="project-card">
          <img src={Atom} alt="project image" />
          <strong>Title</strong>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            adipisci nobis, quisquam at placeat ea nisi ratione quae, vitae
            ducimus ipsa ex deserunt dignissimos tempore, fuga pariatur
            provident quidem? Ipsam.
          </p>
          <div className="project-anchors">
            <a href="#live">Live</a>
            <a href="#code">Code</a>
          </div>
        </div>

        <div className="project-card">
          <img src={justtodo} alt="project image" />
          <strong>Title</strong>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            adipisci nobis, quisquam at placeat ea nisi ratione quae, vitae
            ducimus ipsa ex deserunt dignissimos tempore, fuga pariatur
            provident quidem? Ipsam.
          </p>
          <div className="project-anchors">
            <a href="#live">Live</a>
            <a href="#code">Code</a>
          </div>
        </div>

        <div className="project-card">
          <img src={tourist} alt="project image" />
          <strong>Title</strong>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            adipisci nobis, quisquam at placeat ea nisi ratione quae, vitae
            ducimus ipsa ex deserunt dignissimos tempore, fuga pariatur
            provident quidem? Ipsam.
          </p>
          <div className="project-anchors">
            <a href="#live">Live</a>
            <a href="#code">Code</a>
          </div>
        </div>

        <div className="project-card">
          <img src={portfolio} alt="project image" />
          <strong>Title</strong>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            adipisci nobis, quisquam at placeat ea nisi ratione quae, vitae
            ducimus ipsa ex deserunt dignissimos tempore, fuga pariatur
            provident quidem? Ipsam.
          </p>
          <div className="project-anchors">
            <a href="#live">Live</a>
            <a href="#code">Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
