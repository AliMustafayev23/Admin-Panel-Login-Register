import React from "react";
import Cards from "./cards";
import EducationIsLife from "./education is life";
import FindCourse from "./find course";
import WelcomeUniversity from "./welcome to university";

const Home = () => {
  return (
    <div>
      <FindCourse />
      <WelcomeUniversity />
      <Cards />
      <EducationIsLife />
    </div>
  );
};

export default Home;
