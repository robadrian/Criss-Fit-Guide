import React from "react";
import "./SignUp.css";

export default function SignUp() {
  return (
    <form className="SignUp">
      <input placeholder="Please enter your e-mail" type="email" />
      <input placeholder="Please enter your first name" />
      <button className="signUp">SignUp</button>
    </form>
  );
}
