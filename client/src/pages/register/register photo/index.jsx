import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const RegisterPhoto = () => {
  return (
    <div id="registerPhoto">
      <div className="container">
        <div className="registerPhoto">
          <h1>Register</h1>
          <div className="backHome">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-play"></i>
            <p>Register</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPhoto;
