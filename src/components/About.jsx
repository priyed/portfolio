import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCogs } from "@fortawesome/free-solid-svg-icons";
import "tippy.js/dist/tippy.css";
import Skills from "./Skills";
import "./About.css";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="about-container container" id="about">
      <FontAwesomeIcon icon={faUser} className="profile-icon" />
      <h4>About me</h4>
      <Slide left>
        <h1>Hey There!</h1>
      </Slide>

      <Slide up>
        <p>
          My name is Stanley Duye, a frontend web developer with a knack for
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
          movies or hang out with friends.
        </p>
      </Slide>

      <div className="skills-container">
        <FontAwesomeIcon icon={faCogs} className="skill-cogs" />

        <h3>Skills I currently work with</h3>
        <Fade right>
          <Skills />
        </Fade>
      </div>
    </div>
  );
};

export default About;
