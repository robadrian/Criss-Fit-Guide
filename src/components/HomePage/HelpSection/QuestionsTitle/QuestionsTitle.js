import React from "react";
import "./QuestionsTitle.css";

export default function QuestionsTitle(props) {
  return <h3 className="helpQuestion">{props.question}</h3>;
}
