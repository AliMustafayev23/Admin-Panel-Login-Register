import React from "react";
import CreateCoolWebsite from "../../../components/create cool website";
import Cards from "./cards";
import CourseCarousel from "./carousel";
import EducationIsLife from "./education is life";
import FindCourse from "./find course";
import PopularCourses from "./popular courses";
import Teachers from "./teachers";
import WelcomeUniversity from "./welcome to university";

const Home = () => {
  function reveal() {
    var container2 = document.querySelectorAll(".container2");
    for (var i = 0; i < container2.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = container2[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        container2[i].classList.add("active");
      } else {
        container2[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div>
      <FindCourse />
      <WelcomeUniversity />
      <Cards />
      <EducationIsLife />
      <PopularCourses />
      <CourseCarousel />
      <Teachers />
      <CreateCoolWebsite />
    </div>
  );
};

export default Home;
