import React from "react";
import "./LearnMoreBtn.css";

export default function LearnMoreBtn(props) {
  return (
    <button className={`learnMoreBtn ${props.shadow}`}>Learn More...</button>
  );
}
