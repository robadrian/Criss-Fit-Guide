import React from "react";
import "./PlansShow.css";
import Splitter from "../../../UI/Splitter/Splitter";
import VerticalCard from "../../../UI/VerticalCard/VerticalCard";
import Program1 from "../../../assets/program1.png";
import Program2 from "../../../assets/program2.png";
import Program3 from "../../../assets/program3.png";
import Program4 from "../../../assets/program4.png";

import LearnMoreBtn from "./LearnMoreBtn/LearnMoreBtn";

export default function PlansShow() {
  return (
    <Splitter className="flex">
      <VerticalCard>
        <img
          src={Program1}
          className="scale program1"
          width="300px"
          alt="Exercise Plan 1"
        />
        <LearnMoreBtn shadow="shadowProgram1" />
      </VerticalCard>
      <VerticalCard>
        <img
          src={Program2}
          className="scale program2"
          width="300px"
          alt="Exercise Plan 2"
        />
        <LearnMoreBtn shadow="shadowProgram2" />
      </VerticalCard>
      <VerticalCard>
        <img
          src={Program3}
          className="scale program3"
          width="300px"
          alt="Exercise Plan 3"
        />
        <LearnMoreBtn shadow="shadowProgram3" />
      </VerticalCard>
      <VerticalCard>
        <img
          src={Program4}
          className="scale program4"
          width="300px"
          alt="Exercise Plan 3"
        />
        <LearnMoreBtn shadow="shadowProgram4" />
      </VerticalCard>
    </Splitter>
  );
}
