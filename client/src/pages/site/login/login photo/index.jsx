import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const LoginPhoto = () => {
  return (
    <div id="loginPhoto">
      <div className="container">
        <div className="loginPhoto">
          <h1>Log in</h1>
          <div className="backHome">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-play"></i>
            <p>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPhoto;
