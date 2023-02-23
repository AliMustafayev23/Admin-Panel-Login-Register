import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../layout/admin/header";
import Dashboard from "../../pages/admin/dashboard";
import { ToastContainer } from "react-toastify";
const AdminRoot = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default AdminRoot;
