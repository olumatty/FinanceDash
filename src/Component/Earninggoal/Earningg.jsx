import React from "react";
import "./EarningG.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const EarningG = () => {
  const value = 75;
  const amount = 4523.98;
  const percentageChange = 250;
  return (
    <div className=" item grid-common grid-c6">
      <div className="title">
        <h3>Earnings</h3>
      </div>
      <div className="piechart">
      <div
        style={{
          width: 150,
          height: 150,
          position: "relative",
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <CircularProgressbar
          value={value}
          strokeWidth={8}
          styles={buildStyles({
            pathColor: `#000000`, // Progress bar color
            trailColor: `#d6d6d6`, // Background trail color
            rotation: 0.25, // Start at the top (12 o'clock)
            counterClockwise: false,  // Set to false for clockwise direction
          })}
        />
        {/* Centered content */}
        <div
          style={{
            position: "absolute",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>${amount.toFixed(2)}</h3>
          <p style={{ margin: 0, color: "#00A651" }}>{percentageChange}%</p>
        </div>
        </div>
      </div>
      <div className="Metrics">
        <div className="Metric_Earning">
            <span>Earnings</span>
            <div className="progress-bar">
            </div>
        </div>
        <div className="Goals">
            <span>Goals</span>
            <div className="Goals-bar">
            </div>
        </div>

      </div>
    </div>
  );
};

export default EarningG;
