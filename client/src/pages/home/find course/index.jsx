import React from "react";
import "./index.scss";
const FindCourse = () => {
  return (
    <div id="findCourse">
      <div className="container">
        <div className="findCourse">
          <h1 className="findCourseTitle">
            Find Oneline Courses That Suits You
          </h1>
          <div className="searchSide">
            <input type="text" placeholder="Keyword search..." />
            <select name="Category Course" id="categoryCourse">
              <option value="categoryCourse">Category Course</option>
              <option value="laravel">Laravel</option>
              <option value="php">Php</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
            </select>
            <select name="Difficulty" id="difficulty">
              <option value="difficulty">Difficulty</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advance">Advance</option>
            </select>
            <button className="search">Search</button>
          </div>
          <p className="weHave">
            We have more than 500 courses to improve your skills
          </p>
          <a className="registerNow">Register Now</a>
        </div>
      </div>
    </div>
  );
};

export default FindCourse;
