import React from "react";
import card1 from "../../../assets/card1.png";
import card2 from "../../../assets/card2.png";
import card3 from "../../../assets/card3.png";
import card4 from "../../../assets/card4.png";
import "./index.scss";
const Cards = () => {
  return (
    <div id="cards">
      <div className="container2">
        <div className="cards">
          <div className="card">
            <img src={card1} alt="" />
            <h3>Knowledge is power</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit mess.</p>
            <a href="/" className="cardReadMore">
              Read More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="card">
            <img src={card2} alt="" />
            <h3>Senior High School</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit mess.</p>
            <a href="/" className="cardReadMore">
              Read More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="card">
            <img src={card3} alt="" />
            <h3>College of Arts & Sciences</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit mess.</p>
            <a href="/" className="cardReadMore">
              Read More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="card">
            <img src={card4} alt="" />
            <h3 className="cardTitle">Unmatched Proffessor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit mess.</p>
            <a href="/" className="cardReadMore">
              Read More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
