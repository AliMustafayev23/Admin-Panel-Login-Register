import React, { useEffect, useState } from "react";
import studentsLogo from "../../../../assets/educationCard1.png";
import booksLogo from "../../../../assets/educationCard2.png";
import schoolsLogo from "../../../../assets/educationCard3.png";
import graduatesLogo from "../../../../assets/educationCard4.png";
import "./index.scss";
const EducationIsLife = () => {
  let [students, setStudents] = useState(0);
  let [books, setBooks] = useState(0);
  let [schools, setSchools] = useState(0);
  let [graduates, setGraduates] = useState(0);
  useEffect(() => {
    const incrementer = setInterval(() => {
      if (students === 12000) {
        clearInterval(incrementer);
      } else {
        setStudents((students = students + 1));
      }
    }, 5);
    const incrementerForBooks = setInterval(() => {
      if (books === 3902) {
        clearInterval(incrementerForBooks);
      } else {
        setBooks((books = books + 1));
      }
    }, 5);
    const incrementerForSchools = setInterval(() => {
      if (schools === 51) {
        clearInterval(incrementerForSchools);
      } else {
        setSchools((schools = schools + 1));
      }
    }, 100);
    const incrementerForGraduates = setInterval(() => {
      if (graduates === 1921) {
        clearInterval(incrementerForGraduates);
      } else {
        setGraduates((graduates = graduates + 1));
      }
    }, 5);
  }, []);

  return (
    <div id="education">
      <div className="container2">
        <div className="education">
          <div className="educationLeft">
            <img
              src="https://preview.colorlib.com/theme/university/images/img_2_b.jpg"
              alt=""
            />
          </div>
          <div className="educationRight">
            <h1 className="educationTitle">Education is Life</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              quibusdam nisi eos accusantium eligendi velit deleniti nihil ad
              deserunt rerum incidunt.
            </p>
            <div className="educationRightDown">
              <div className="educationCardsLeft">
                <div className="educationCard">
                  <img src={studentsLogo} alt="" />
                  <div className="educatonCardLeft">
                    <h1>{students}</h1>
                    <p className="educationCardTitle">STUDENTS</p>
                  </div>
                </div>
                <div className="educationCard">
                  <img src={schoolsLogo} alt="" />
                  <div className="educatonCardLeft">
                    <h1>{schools}</h1>
                    <p className="educationCardTitle">SCHOOLS</p>
                  </div>
                </div>
              </div>
              <div className="educationCardsRight">
                <div className="educationCard">
                  <img src={booksLogo} alt="" />
                  <div className="educatonCardLeft">
                    <h1>{books}</h1>
                    <p className="educationCardTitle">BOOKS</p>
                  </div>
                </div>
                <div className="educationCard">
                  <img src={graduatesLogo} alt="" />
                  <div className="educatonCardLeft">
                    <h1>{graduates}</h1>
                    <p className="educationCardTitle">GRADUATES</p>
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

export default EducationIsLife;
