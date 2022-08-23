import React from "react";
import "./Login.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <form className="login">
        <img
          src={Logo}
          width="250px"
          alt="cris fit gym logo"
          className="logo"
        />
        <h4>You don't have an account?</h4>
        <Link to="/Criss-Fit-Guide/">
          <button className="loginBtn">Go Home</button>
        </Link>
        <h3 className="loginMessage1">Login into your account:</h3>
        <h4 className="loginMessage2">
          Sign in here if you already have a Crisfitguide account
        </h4>
        <div className="inputs">
          <input placeholder="Please enter your e-mail" />
          <input placeholder="Please enter your password" />
        </div>
        <div className="stayConnected">
          <input type="checkbox" name="stay" />
          <label for="stay">Stay Connected</label>
          <a href="https://www.google.com">Forgot your password?</a>
        </div>
        <button className="loginBtn">Login</button>
      </form>
    </>
  );
}
