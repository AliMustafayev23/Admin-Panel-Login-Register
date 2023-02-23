import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Login from "../pages/login";
import NoPage from "../pages/no page";
import MyProfile from "../pages/profile";
import Register from "../pages/register";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile/:_id" element={<MyProfile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default Routing;
