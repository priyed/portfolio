import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { debounce } from "../utilities/helpers";
import "./Navigation.css";

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
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.display = "none";
    document.body.classList.toggle('lock-scroll');
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.display = "block"
    document.body.classList.toggle('lock-scroll');
  };

  return (
    <div className="navigation" style={{ top: visible ? "0" : "-60px" }}>
      <div id="main" className="lock-scroll">
        <FontAwesomeIcon icon={faBars} onClick={openNav}className="menubtn"/>
      </div>
      <nav id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          <FontAwesomeIcon icon={faTimes} />
        </a>
        <ul>
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
