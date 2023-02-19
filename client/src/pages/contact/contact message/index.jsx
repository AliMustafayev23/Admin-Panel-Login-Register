import React from "react";
import "./index.scss";
const ContactMessage = () => {
  return (
    <div id="contact-message">
      <div className="container">
        <div className="contact-message">
          <div className="message">
            <div className="message-up">
              <div className="name">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="phone">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone" />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
            </div>
            <div className="writeMessage">
              <label for="writeMessage">Write Message</label>
              <textarea
                name="message"
                id="message"
                class="form-control py-2"
                cols="30"
                rows="8"
              ></textarea>
            </div>
            <button className="sendMessage">Send Message</button>
          </div>
          <div className="contact-information">
            <h2>Contact Information</h2>
            <p>
              <i className="fa-solid fa-location-dot"></i>203 Fake St. Mountain
              View, San Francisco, California, USA
            </p>
            <p className="contact-telephone">
              <i className="fa-solid fa-phone"></i>+2 392 3929 210
            </p>
            <p className="contact-email">
              <i className="fa-solid fa-envelope"></i>info@yourdomain.com
            </p>
            <p>
              <i className="fa-regular fa-clock"></i>Monday — Friday 8:00am -
              5:00pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMessage;
