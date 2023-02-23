import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../layout/site/header";
import Footer from "../../layout/site/footer";
import { ToastContainer } from "react-toastify";
const MainRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default MainRoot;
