import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import Atom from "../assets/projectimages/AtomClone.PNG";
import justtodo from "../assets/projectimages/justtodo.PNG";
import portfolio from "../assets/projectimages/portfolio.PNG";
import tourist from "../assets/projectimages/tourist.PNG";
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
          I've worked on different kinds of websites and projects, from single
          page applications, business websites and landing pages.
        </p>
      </Zoom>

      <Zoom duration={3000}>
        <div className="projects">
          <div className="project-card">
            <img src={Atom} alt="project" />
            <strong>Atom website clone</strong>
            <p>
              The official website for Atom code editor, is one of my favorite
              ever. This is my shot at trying to build a clone. This was achieved with good ol` HTML and CSS.
            </p>
            <div className="project-anchors">
              <a href="#live">Live</a>
              <a href="#code">Code</a>
            </div>
          </div>

          <div className="project-card">
            <img src={justtodo} alt="project" />
            <strong>Just To Do</strong>
            <p>
              Very typical, lol! This is my go at making a simple to-do app.
              Built with React and tailwindcss.
            </p>
            <div className="project-anchors">
              <a href="#live">Live</a>
              <a href="#code">Code</a>
            </div>
          </div>

          <div className="project-card">
            <img src={tourist} alt="project" />
            <strong>Title</strong>
            <p>
              This a landing page for a tourism guide, built entirely with HTML and TailwinCSS.
            </p>
            <div className="project-anchors">
              <a href="#live">Live</a>
              <a href="#code">Code</a>
            </div>
          </div>

          <div className="project-card">
            <img src={portfolio} alt="project" />
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
      </Zoom>
    </div>
  );
};

export default Projects;
