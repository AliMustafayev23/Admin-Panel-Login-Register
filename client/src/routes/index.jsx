import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/home";
import NoPage from "../pages/no page";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default Routing;
