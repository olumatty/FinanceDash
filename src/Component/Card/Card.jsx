import React from "react";
import './Card.css'
const Card = () => {
  return (
    <div className="grid-one-item grid-common1 grid-c1">
      <div className="card-wrapper">
        <div></div>
        <span className="card-pin">4238 4388 4161 8183</span>
      </div>
      <div className="card-logo-wrapper">
        <div>
          <p className="text text-silver-v1 Name">Marcel Dias</p>
          <p className="text text-sm text-white">12/31</p>
        </div>
        <div className="card-logo">
          <div className="logo-shape1"></div>
          <div className="logo-shape2"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
