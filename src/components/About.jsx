import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCogs } from "@fortawesome/free-solid-svg-icons";
import 'tippy.js/dist/tippy.css';
import Skills from './Skills';
import "./About.css";

const About = () => {
  return (
    <div className="about-container container" id="about">
      <FontAwesomeIcon icon={faUser} className="profile-icon"/>
      <h4>About me</h4>
      <h1>Hey There!</h1>
      <p>
        My name is Stanley Duye, a frontend web developer with a knack for
        building simple and easy to use websites and web apps without cutting
        short on functionality, design and speed.
      </p>
      <p>
        I enjoy finding creative solution to the problems I face with a constant
        drive to get better and push forward in all I do.
      </p>
      <p>
        I spend my days coding something, bringing designs/mockups to life and
        learning. When I am not coding, I trade the financial markets, watch
        movies or hang out with friends.
      </p>

      <div className="skills-container">
      <FontAwesomeIcon icon={faCogs} className="skill-cogs"/>
        <h3>Skills I currently work with</h3>
        <Skills/>
         
        </div>
    </div>
  );
};

export default About;
