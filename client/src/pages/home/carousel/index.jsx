import React from "react";
import Carousel from "better-react-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getDataCourse } from "../../../redux/slice/getDataCourseSlice";
import { useEffect } from "react";
import "./index.scss";
const CourseCarousel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataCourse());
  }, []);
  const courses = useSelector((state) => state.courses.data);
  console.log(courses);
  return (
    <div className="carousel">
      <Carousel cols={3} rows={1} gap={30} loop>
        {courses.map((e) => {
          return (
            <Carousel.Item>
              <div className="courseCard">
                <img src={e.image} alt="" />
                <h2>{e.name}</h2>
                <p>{e.description}</p>
                <div className="courseCardEnd">
                  <p className="members">{e.members}/6000</p>
                  <p className="price">${e.price}</p>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CourseCarousel;
