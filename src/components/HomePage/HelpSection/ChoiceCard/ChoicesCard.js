import React from "react";
import "./ChoicesCard.css";

export default function ChoicesCard(props) {
  return (
    <h4 className="choiceCard" onClick={props.onClick}>
      {props.choice}
    </h4>
  );
}
