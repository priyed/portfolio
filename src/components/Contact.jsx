import React from "react";
import "./Contacts.css";

const Contact = () => {
  return (
    <div className="contacts-container container" id="contact">
        <h1>Contact me</h1>
        <h3>Let's build some cool stuff together</h3>
      <form name="contact" action="#" method="POST" className="contact-form">
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
      </form>
    </div>
  );
};

export default Contact;
