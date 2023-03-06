import axios from "axios";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./index.scss";
const Dashboard = () => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (percentage < 80) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <div id="dashboard">
      <div className="container">
        <div className="dashboard">
          <div className="gender">
            <div style={{ width: 150 }}>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}% `}
                backgroundPadding={7}
                background
                styles={{
                  path: {
                    strokeLinecap: "butt",
                  },
                  trail: {
                    stroke: "red",
                  },
                }}
              />
            </div>
            <div style={{ width: 150 }}>
              <CircularProgressbar
                value={100 - percentage}
                text={`${100 - percentage}% `}
                backgroundPadding={7}
                background
                styles={{
                  path: {
                    strokeLinecap: "butt",
                  },
                  trail: {
                    stroke: "red",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
