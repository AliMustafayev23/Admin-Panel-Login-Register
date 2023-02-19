import React from "react";
import AboutPhoto from "./about photo";
import CreateCoolWebsite from "../../components/create cool website";
import CompanyHistory from "./company history";
import SchoolServices from "./school services";
import WhyChooseUs from "./why choose us";
const About = () => {
  return (
    <div>
      <AboutPhoto />
      <CompanyHistory />
      <SchoolServices />
      <WhyChooseUs />
      <CreateCoolWebsite />
    </div>
  );
};

export default About;
