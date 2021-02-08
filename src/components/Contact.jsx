import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Contacts.css";
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <div className="contacts-container container" id="contact">
      <FontAwesomeIcon icon={faMailBulk} className="bg-icon" />
      <h4>Contact me</h4>
      <Jump duration={3000}><h2 >Want to say hi?</h2></Jump>

      <Fade left duration={2000}>
      <p>
        I'm currently open for contract or freelance opportunities on ReactJS
        and others forms of frontend web development
      </p>
      <h3>Let's build some cool stuff together!</h3>
      </Fade>
      <h5>REACH OUT ON:</h5>
      <div className="social-btn-container" >
        <div className="social-btns">

          <a href="#twitter">
            <FontAwesomeIcon
              icon={faTwitter}
              className="social-btn twitter-icon"
            />
          </a>

          <a href="#github">
            <FontAwesomeIcon icon={faGithub} className="social-btn git-icon" />
          </a>

          <a href="#mail">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="social-btn whatsapp-icon"
            />
          </a>
        </div>
      </div>
      
      {/*<form name="contact" action="#" method="POST" className="contact-form">
        <input type="hidden" name="name" />
        <label htmlFor="name" className="form-label">
          <p>Name</p>
          <br />
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="John Doe"
            required
          />
        </label>
        <label htmlFor="email" className="form-label">
          <p>E-mail</p>
          <br />
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="johndoe@gmail.com"
            required
          />
        </label>
        <label htmlFor="message" className="form-label">
          <p>Message</p>
          <br />
          <textarea
            id="message"
            rows="4"
            name="message"
            className="form-input"
            placeholder="Hi there..."
            required
          />
        </label>
        <button type="submit" className="submit-button">Send</button>
  </form>*/}
    </div>
  );
};

export default Contact;
