import React, { useState, useEffect } from "react";
import { debounce } from "../utilities/helpers";
import "./Navigation.css";
import "./mobile-nav.css";

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    //find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.display = "none";
    document.getElementById("menu").style.transform = "scale(1)";
    document.body.classList.toggle("lock-scroll");
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.display = "block";
    document.getElementById("menu").style.transform = "scale(0)";
    document.body.classList.toggle("lock-scroll");
  };

  return (
    <div className="navigation" style={{ top: visible ? "0" : "-70px" }}>

      {/* Mobile Navigation */}
      <div className="menu-wrap">
      <div id="main" className="lock-scroll">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={openNav}
          className="menubtn"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 8h16M4 16h16"
          />
        </svg>
      </div>
      <nav id="mySidenav" className="sidenav">
        <a href="#c" className="closebtn" onClick={closeNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
        <ul id="menu">
          <li>
            <a className="link" href="#home" onClick={closeNav}>
              Home
            </a>
          </li>
          <li>
            <a className="link" href="#about" onClick={closeNav}>
              About
            </a>
          </li>
          <li>
            <a className="link" href="#projects" onClick={closeNav}>
              Projects
            </a>
          </li>
          <li>
            <a className="link" href="#contact" onClick={closeNav}>
              Contact
            </a>
          </li>
        </ul>
      </nav> 
      </div>
      
      
      {/*
      <div class="menu-wrap">
        <input type="checkbox" class="toggler" />
        <div class="hamburger"><div></div></div>
        <div class="menu">
            <div>
                <div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div> */}

      {/*Desktop Navigation */}
      <nav className="desktop-navigation">
        <ul>
          <li>
            <a className="link" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
