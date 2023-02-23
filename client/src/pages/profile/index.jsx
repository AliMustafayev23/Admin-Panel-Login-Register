import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
const MyProfile = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/students/${_id}`).then((response) => {
      setStudent(response.data);
    });
  }, []);

  return (
    <div id="profile">
      <div className="container">
        <div className="profile">
          <div className="profileUp">
            <img src={student.image} alt="" />
          </div>

          <div className="profileDown">
            <p>{student.username}</p>
            <p>{student.email}</p>
            <p>
              <b>Age : </b>
              {student.age}
            </p>
            <p>
              <b>Gender : </b>
              {student.gender == "male" ? (
                <i className="fa-solid fa-person" style={{ color: "aqua" }}></i>
              ) : (
                <i
                  className="fa-solid fa-person-dress"
                  style={{ color: "red" }}
                ></i>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
