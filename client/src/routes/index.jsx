import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoot from "../components/admin";
import MainRoot from "../components/site";
import About from "../pages/site/about";
import Contact from "../pages/site/contact";
import Dashboard from "../pages/admin/dashboard";
import Home from "../pages/site/home";
import Login from "../pages/site/login";
import NoPage from "../pages/site/no page";
import MyProfile from "../pages/site/profile";
import Register from "../pages/site/register";

const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile/:_id",
        element: <MyProfile />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
];

export default ROUTES;
