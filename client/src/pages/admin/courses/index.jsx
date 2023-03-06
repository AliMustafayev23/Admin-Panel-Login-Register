import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./index.scss";
const Courses = () => {
  const [course, setCourses] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/course").then((response) => {
      setCourses(response.data);
    });
  }, []);
  return (
    <div id="admin-courses">
      <div className="container">
        <div className="admin-courses">
          {course.map((e) => {
            return (
              <div className="course">
                <img src={e.image} alt="" />
                <h3>{e.name}</h3>
                <p>{e.description}</p>
                <div className="course-end">
                  <p className="price">${e.price}</p>
                  <p>{e.members}/6000</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
