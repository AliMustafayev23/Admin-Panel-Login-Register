import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer-middle">
            <div className="footer-middle-first">
              <h2>University</h2>
              <p>
                Perferendis eum illum voluptatibus dolore tempora consequatur
                minus asperiores temporibus.
              </p>
            </div>
            <div className="footer-middle-second">
              <h2>Quick Link</h2>
              <div className="footer-middle-second-down">
                <div className="footer-middle-second-left">
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/courses">Courses</Link>
                  <Link to="/pages">Pages</Link>
                </div>
                <div className="footer-middle-second-right">
                  <Link to="/news">News</Link>
                  <Link to="/support">Support</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/privacy">Privacy</Link>
                </div>
              </div>
            </div>
            <div className="contact">
              <h2>Contact Information</h2>
              <p>
                <i className="fa-solid fa-location-dot"></i>203 Fake St.
                Mountain View, San Francisco, California, USA
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
    </div>
  );
};

export default Footer;
