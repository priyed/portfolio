import React from "react";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <div className="header" id="home">
      
      <Slide down duration={1500}>
      <h2>I'm</h2>
      <h1>STANLEY</h1>
      <p>I can help you create an online presence for your business. In other words I am a front-end web developer</p>
      
        <a href="#contact" className="contact-btn">
          Say Hi!
        </a>
      </Slide>
    </div>
  );
};

export default Home;
