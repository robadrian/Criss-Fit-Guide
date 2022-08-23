import React from "react";
import "./Footer.css";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Youtube from "../../assets/youtube.png";
import Stripe from "../../assets/stripe.png";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <img src={Stripe} width="200px" height="60px" alt="Stripe" />
        <div className="middle">
          <h4 className="footerDescription">
            Crisfitguide Since 2017 - All Right Reserved © 2022 |
            https://www.crisfitguide.com/
          </h4>
          <h5 className="trust">See our reviews on TrustPilot</h5>
        </div>
        <div className="social">
          <img width="30px" src={Facebook} alt="Facebook Icon" />
          <img width="30px" src={Instagram} alt="Instagram Icon" />
          <img width="30px" src={Youtube} alt="Youtube Icon" />
        </div>
      </footer>
    </>
  );
}
