import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Navigation />
        <div className="App container">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
