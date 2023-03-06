import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./index.scss";
const Students = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/students").then((response) => {
      setStudents(response.data);
    });
  }, []);
  return (
    <div id="students">
      <div className="container">
        <div className="students">
          <table>
            <tbody>
              <tr>
                <th>Student:</th>
                <th>Fullname:</th>
                <th>Email:</th>
                <th>Age:</th>
                <th>Gender:</th>
              </tr>
              {students.map((e) => {
                if (e.type !== "teacher") {
                  return (
                    <tr>
                      <th>
                        <img src={e.image} alt="" />
                      </th>
                      <th>{e.username}</th>
                      <th>{e.email}</th>
                      <th>{e.age}</th>
                      <th>
                        {e.gender == "male" ? (
                          <i
                            className="fa-solid fa-person fa-2x"
                            style={{ color: "aqua" }}
                          ></i>
                        ) : (
                          <i
                            className="fa-solid fa-person-dress fa-2x"
                            style={{ color: "red" }}
                          ></i>
                        )}
                      </th>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;
