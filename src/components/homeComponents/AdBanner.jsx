import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";

const AdBanner = () => {
  return (
    <div 
      className="bckgrnd-img"
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
      }}
    >
      <div className="ad-container">
        <h3 className="ad-h3 new-recipe">New Recipe</h3>
        <h1 className="pinapple-salmon">Pineapple Salmon</h1>
        <h3 className="ad-h3 para-h3">
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq 
          brown <br /> sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in <br /> butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipe/3">
          <button className="blue-btn">Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
