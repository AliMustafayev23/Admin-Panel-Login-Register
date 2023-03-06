import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../layout/admin/header";
import { ToastContainer } from "react-toastify";
import "./index.scss";
const AdminRoot = () => {
  return (
    <>
      <div className="admin">
        <AdminHeader />
        <Outlet />
        <ToastContainer />
      </div>
    </>
  );
};

export default AdminRoot;
