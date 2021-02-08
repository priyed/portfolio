import React from "react";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <div className="header" id="home">
      
      <Slide down>
      <h2>I'm</h2>
      <h1>STANLEY</h1>
      <p>A frontend web developer.</p>
      
        <a href="#contact" className="contact-btn">
          Say Hi!
        </a>
      </Slide>
    </div>
  );
};

export default Home;
