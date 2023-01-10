import React from "react";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <div className="header" id="home">
      
      <Slide down duration={1500}>
      <h2>Hello <span role="img" aria-label="wave-emoji">&#x1F44B;</span>, I'm</h2>
      <h1>Stanley Duye</h1>
      <p>Frontend Developer</p>
      
        <a href="#contact" className="contact-btn">
          Say Hi!
        </a>
      </Slide>
    </div>
  );
};

export default Home;
