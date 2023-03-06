import { Button } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
const AdminHeader = () => {
  const { student } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate();
  const goToSite = () => {
    navigate("/");
  };
  return (
    <div id="admin-header">
      <div className="container">
        <div className="admin-header">
          <h1>Universty</h1>
          <div className="teacher">
            <img src={student?.result?.image} alt="" />
            <h3>{student?.result?.username}</h3>
          </div>
          <nav>
            <Link to={"/admin/students-list"}>
              <i class="fa-solid fa-user-graduate"></i>Students
            </Link>
            <Link to={"/admin/students-list"}>
              <i class="fa-solid fa-list"></i>
              Students
            </Link>
            <Link to={"/admin/courses-list"}>
              <i class="fa-solid fa-chalkboard-user"></i>
              Courses
            </Link>
            <Link to={"/admin/students-list"}>
              <i class="fa-solid fa-images"></i>
              Students
            </Link>
          </nav>
          <button class="goToSite" onClick={() => goToSite()}>
            Go to Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
