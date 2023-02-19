import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const AboutPhoto = () => {
  return (
    <div id="aboutPhoto">
      <div className="container">
        <div className="aboutPhoto">
          <h1>About Us</h1>
          <div className="backHome">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-play"></i>
            <p>About Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPhoto;
