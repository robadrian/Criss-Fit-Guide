import React from "react";
import "./FoodSection.css";
import Food1 from "../../../assets/food1.png";
import Food2 from "../../../assets/food2.png";
import Food3 from "../../../assets/food3.png";

export default function FoodSection() {
  return (
    <div className="foodSection">
      <img src={Food1} width="400px" alt="healthy food" />
      <img src={Food2} width="400px" alt="healthy food" />
      <img src={Food3} width="400px" alt="healthy food" />
    </div>
  );
}
