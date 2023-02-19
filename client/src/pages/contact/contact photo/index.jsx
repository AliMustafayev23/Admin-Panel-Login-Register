import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const ContactPhoto = () => {
  return (
    <div id="contactPhoto">
      <div className="container">
        <div className="contactPhoto">
          <h1>Contact Us</h1>
          <div className="backHome">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-play"></i>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPhoto;
