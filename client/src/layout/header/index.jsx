import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Header = () => {
  const categories = [
    {
      label: <Link to={"/categories/html"}>HTML</Link>,
      key: "0",
    },
    {
      label: <Link to={"/categories/wordpress"}>WordPress</Link>,
      key: "1",
    },
    {
      label: <Link to={"/categories/laravel"}>Laravel</Link>,
      key: "2",
    },
    {
      label: <Link to={"/categories/javascript"}>JavaScript</Link>,
      key: "3",
    },
    {
      label: <Link to={"/categories/python"}>Python</Link>,
      key: "4",
    },
    {
      type: "divider",
    },
  ];
  const courses = [
    {
      label: <Link to={"/courses/html"}>HTML</Link>,
      key: "0",
    },
    {
      label: <Link to={"/courses/wordpress"}>WordPress</Link>,
      key: "1",
    },
    {
      label: <Link to={"/courses/laravel"}>Laravel</Link>,
      key: "2",
    },
    {
      label: <Link to={"/courses/javascript"}>JavaScript</Link>,
      key: "3",
    },
    {
      label: <Link to={"/courses/python"}>Python</Link>,
      key: "4",
    },
    {
      type: "divider",
    },
  ];
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to={"/"} className="university">
            UNIVERSITY
          </Link>
          <nav>
            <NavLink to={"/"}>Home</NavLink>
            <Dropdown
              menu={{
                items: courses,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Courses
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items: categories,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Catagories
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </nav>
          <div className="loginAndRegister">
            <Link to={"/login"}>Login</Link>/
            <Link to={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
