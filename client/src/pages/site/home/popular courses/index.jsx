import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataCourse } from "../../../../redux/slice/getDataCourseSlice";

import "./index.scss";

const PopularCourses = () => {
  return (
    <div id="popularCourse">
      <div className="container2">
        <div className="popularCourse">
          <h1>Popular Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            qui neque sint eveniet <br /> tempore sapiente.
          </p>
          <a className="enroll" href="/">
            <i className="fa-solid fa-book-open"></i>Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
