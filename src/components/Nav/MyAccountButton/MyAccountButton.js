import React from "react";
import "./MyAccountButton.css";
import { ImUser } from "react-icons/im";

export default function MyAccountButton() {
  return (
    <div className="myAccountButton">
      <ImUser />
      My Account
    </div>
  );
}
