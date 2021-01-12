import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import "./Contacts.css";

const Contact = () => {
  return (
    <div className="contacts-container container" id="contact">
      <FontAwesomeIcon icon={faMailBulk} className="bg-icon" />
      <h4>Contact me</h4>
      <p>
        I'm currently open for contract or freelance opportunities on ReactJS
        and others forms of frontend web development
      </p>
      <h3>Let's build some cool stuff together!</h3>
      <h5>Find me on:</h5>
      <div className="social-btn-container">
        <div className="social-btns">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} className="social-btn fb-icon" />
          </a>

          <a href="#">
            <FontAwesomeIcon
              icon={faTwitter}
              className="social-btn twitter-icon"
            />
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faGithub} className="social-btn git-icon" />
          </a>

          <a href="#">
            <FontAwesomeIcon
              icon={faWhatsapp}
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
