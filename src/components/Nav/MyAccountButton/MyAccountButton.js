import React from "react";
import "./MyAccountButton.css";
import { ImUser } from "react-icons/im";
import { Link } from "react-router-dom";

export default function MyAccountButton() {
  return (
    <div className="myAccountButton">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/Criss-Fit-Guide/login"
      >
        <ImUser />
        My Account
      </Link>
    </div>
  );
}
