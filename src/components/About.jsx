import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCogs } from "@fortawesome/free-solid-svg-icons";
import "./About.css";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="container about-container" id="about">
      <FontAwesomeIcon icon={faUser} className="profile-icon" />
    
      <h4>About me</h4>
      <Slide left>
        <h1>Hey There!</h1>
      </Slide>

      <Slide up>
        <p>
          My name is Priye Duye, a frontend web developer with a knack for
          building simple and easy to use websites and web apps without cutting
          short on functionality, design and speed.
        </p>
        <p>
          I enjoy finding creative solution to the problems I face with a
          constant drive to get better and push forward in all I do.
        </p>
        <p>
          I spend my days coding something, bringing designs/mockups to life and
          learning. When I am not coding, I trade the financial markets, watch
          movies or play video games.
        </p>
      </Slide>

      <div className="skills-container">
        <FontAwesomeIcon icon={faCogs} className="skill-cogs" />
        <Fade left duration={2000}>
        <h3>I currently work with</h3>
        </Fade>
        <Fade down duration={4000}><hr></hr></Fade>
        <Fade right>
          <div className="skills">
            <span id="react">React</span>
            <span id="framer">Framer Motion</span>
            <span id="css">CSS3</span>
            <span id="js">JavaScript</span>
            <span id="git">Git</span>
            <span id="tailwind">TailwindCSS</span>
            <span id="html">HTML5</span>
            <span id="redux">Redux</span>
            <span id="github">GitHub</span>
            <span id="mui">Material UI</span>
            <span id="seo">SEO</span>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
