import React from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import "./index.scss";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../redux/slice/authSlice";
import { Button, Modal } from "antd";
const Header = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => ({ ...state.auth }));
  const logOut = () => {
    dispatch(setLogout());
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    logOut();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
  const profileDropdown = [
    {
      label: (
        <button className="logOut" onClick={showModal}>
          Log Out
        </button>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
  ];

  const [menuBar, setMenuBar] = useState(false);

  const openBar = () => {
    if (menuBar == false) {
      setMenuBar(true);
    }
    if (menuBar == true) {
      setMenuBar(false);
    }
  };

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
                  <i className="fa-solid fa-sort-down"></i>
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
                  <i className="fa-solid fa-sort-down"></i>
                </Space>
              </a>
            </Dropdown>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </nav>
          {student?.result?._id ? (
            <Dropdown
              menu={{
                items: profileDropdown,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img src={student?.result?.image} className="userImage" />
                  {student?.result?.username}
                  <i className="fa-solid fa-sort-down"></i>
                </Space>
              </a>
            </Dropdown>
          ) : (
            <div className="loginAndRegister">
              <Link to={"/login"}>Login</Link>/
              <Link to={"/register"}>Register</Link>
            </div>
          )}
          <i className="fa-solid fa-bars fa-2x" onClick={() => openBar()}></i>
        </div>
        <div className={menuBar ? "header-down" : "header-down-none"}>
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
                  <i className="fa-solid fa-sort-down"></i>
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
                  <i className="fa-solid fa-sort-down"></i>
                </Space>
              </a>
            </Dropdown>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </nav>
          {student?.result?._id ? (
            <div>
              <img src={student?.result?.image} className="userImage" />
              <p>{student.result.username}</p>
              <button className="logOut" onClick={showModal}>
                Log Out
              </button>
            </div>
          ) : (
            <div className="loginAndRegister">
              <Link to={"/login"}>Login</Link>/
              <Link to={"/register"}>Register</Link>
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Log Out"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
    </div>
  );
};

export default Header;
