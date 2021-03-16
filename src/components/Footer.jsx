import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p id="copyright">
        {" "}
        <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} {" "} {" "}
        Developed with{" "}
        <span>
          <FontAwesomeIcon icon={faHeart} className="footer-icon" />
        </span>{" "}
        by <span className="name">Priye Duye</span>
      </p>
    </div>
  );
};

export default Footer;
