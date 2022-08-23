import React from "react";
import "./Splitter.css";

export default function Splitter(props) {
  return <div className={`splitter ${props.className}`}>{props.children}</div>;
}
