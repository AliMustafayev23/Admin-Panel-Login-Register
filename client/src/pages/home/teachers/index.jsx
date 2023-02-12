import React from "react";
import "./index.scss";
const Teachers = () => {
  return (
    <div id="teachers">
      <div className="container2">
        <div className="teachers">
          <h1>Teachers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            qui neque sint eveniet <br /> tempore sapiente.
          </p>
          <div className="teacherCards">
            <div class="teacher-card">
              <div class="teacher-card-inner">
                <div class="teacher-card-front">
                  <p className="teacher">
                    <b className="teacher-name">Job Smith</b>
                    Laravel Expert
                  </p>
                </div>
                <div class="teacher-card-back">
                  <p className="description">
                    “Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.”
                  </p>
                  <div className="teacher-card-back-end">
                    <img src="https://preview.colorlib.com/theme/university/images/person_3.jpg" />
                    <p className="teacher-back">
                      <b className="teacher-name">Job Smith</b>
                      Laravel Expert
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="teacher-card">
              <div class="teacher-card-inner">
                <div class="teacher-card-front">
                  <p className="teacher">
                    <b className="teacher-name">Mellissa Cruz</b>
                    JavaScript Guru
                  </p>
                </div>
                <div class="teacher-card-back">
                  <p className="description">
                    “Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.”
                  </p>
                  <div className="teacher-card-back-end">
                    <img src="https://preview.colorlib.com/theme/university/images/person_1.jpg" />
                    <p className="teacher-back">
                      <b className="teacher-name-back">Mellissa Cruz</b>
                      JavaScript Guru
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="teacher-card">
              <div class="teacher-card-inner">
                <div class="teacher-card-front">
                  <p className="teacher">
                    <b className="teacher-name">Aldin Powell</b>
                    Wordpress Ninja
                  </p>
                </div>
                <div class="teacher-card-back">
                  <p className="description">
                    “Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.”
                  </p>
                  <div className="teacher-card-back-end">
                    <img src="https://preview.colorlib.com/theme/university/images/person_2.jpg" />
                    <p className="teacher-back">
                      <b className="teacher-name">Aldin Powell</b>
                      Wordpress Ninja
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
