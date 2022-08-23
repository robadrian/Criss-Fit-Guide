import React from "react";
import "./Home.css";
import HelpSection from "./HelpSection/HelpSection";
import FreeFoodGuide from "./FreeFoodGuide/FreeFoodGuide";
import PlansShow from "./PlansShow/PlansShow";
import FoodSection from "./FoodSection/FoodSection";
import Nav from "./../Nav/Nav";
import Footer from "./../Footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="home">
        <HelpSection />
      </div>
      <h2 style={{ margin: "1rem", textAlign: "center" }}>
        Select the FITNESS WORKOUT PROGRAM that fits you!
      </h2>
      <FreeFoodGuide />
      <PlansShow />
      <FoodSection />
      <FreeFoodGuide />
      <Footer />
    </>
  );
}
