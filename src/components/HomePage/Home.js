import React from "react";
import "./Home.css";
import HelpSection from "./HelpSection/HelpSection";
import FreeFoodGuide from "./FreeFoodGuide/FreeFoodGuide";
import PlansShow from "./PlansShow/PlansShow";
import FoodSection from "./FoodSection/FoodSection";

export default function Home() {
  return (
    <>
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
    </>
  );
}
