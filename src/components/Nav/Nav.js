import React from "react";
import Logo from "../../assets/Logo.png";
import "./Nav.css";
import NavButton from "./NavButton/NavButton";
import MyAccountButton from "./MyAccountButton/MyAccountButton";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <img
        src={Logo}
        alt="Criss Fit Guide Logo"
        width="160px"
        className="logo"
      />
      <div className="navButtons">
        <Link to="/Criss-Fit-Guide/" style={{ color: "black" }}>
          <NavButton name="Home" />
        </Link>
        <NavButton name="Programs" />
        <NavButton name="About Me" />
      </div>
      <MyAccountButton />
    </div>
  );
}
