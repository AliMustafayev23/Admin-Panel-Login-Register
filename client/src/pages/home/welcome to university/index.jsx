import React from "react";
import "./index.scss";
const WelcomeUniversity = () => {
  return (
    <div id="welcomeUniversity">
      <div className="container2">
        <div className="welcomeUniversity">
          <div className="welcomeUniversityLeft">
            <h2 className="welcomeUniversityTitle">
              Welcome to <br /> University
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A <br />
              quibusdam nisi eos accusantium eligendi velit deleniti nihil ad
              <br />
              deserunt rerum incidunt nulla nemo eius molestiae architecto
              <br />
              beatae asperiores doloribus animi.
            </p>
            <a className="readMore">Read More</a>
          </div>
          <div className="welcomeUniversityRight">
            <a href="https://vimeo.com/45830194">
              <i className="fa-solid fa-play fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeUniversity;
