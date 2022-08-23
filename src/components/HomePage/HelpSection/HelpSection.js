import React, { useState } from "react";
import "./HelpSection.css";
import SignUp from "./SignUp/SignUp";
import HelpSubtitle from "./HelpSubtitle/HelpSubtitle";
import ChoicesCard from "./ChoiceCard/ChoicesCard";
import QuestionsTitle from "./QuestionsTitle/QuestionsTitle";
import firstQuestions from "../../../data/firstQuestions.json";
import helpTitle from "../../../data/helpTitle.json";
import gender from "../../../data/gender.json";
import age from "../../../data/age.json";
import struggle from "../../../data/struggle.json";
import motivate from "../../../data/motivate.json";

export default function HelpSection() {
  const [isFirst, setIsFirst] = useState(true);
  const [isSecond, setIsSecond] = useState(true);
  const [isThird, setIsThird] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const firstForward = () => {
    setIsFirst((prev) => !prev);
  };
  const secondForward = () => {
    setIsSecond((prev) => !prev);
  };

  const thirdForward = () => {
    setIsThird(true);
  };

  const isSignUp = () => {
    setSignUp((prev) => !prev);
  };

  return (
    <div className="helpSection">
      {isFirst && <QuestionsTitle question={helpTitle[0]} />}
      {!isFirst && isSecond && <QuestionsTitle question={helpTitle[1]} />}
      {!isSecond && !isFirst && !isThird && (
        <QuestionsTitle question={helpTitle[1]} />
      )}
      {isThird && !signUp && <QuestionsTitle question={helpTitle[2]} />}
      {signUp && <QuestionsTitle question={helpTitle[3]} />}

      {/* Here starts the subtitle */}

      {isFirst && <HelpSubtitle message={motivate[0]} />}
      {!isFirst && isSecond && <HelpSubtitle message={motivate[1]} />}
      {!isSecond && !isFirst && !isThird && (
        <HelpSubtitle message={motivate[1]} />
      )}
      {isThird && !signUp && <HelpSubtitle message={motivate[2]} />}
      {signUp && <HelpSubtitle message={motivate[3]} />}

      {/* Here start the questions */}

      {isFirst &&
        firstQuestions.map((choices) => {
          return (
            <ChoicesCard
              choice={choices}
              key={Math.random()}
              onClick={firstForward}
            />
          );
        })}
      {!isFirst &&
        isSecond &&
        gender.map((choices) => {
          return (
            <ChoicesCard
              choice={choices}
              key={Math.random()}
              onClick={secondForward}
            />
          );
        })}
      {!isSecond &&
        !isThird &&
        age.map((choices) => {
          return (
            <ChoicesCard
              choice={choices}
              key={Math.random()}
              onClick={thirdForward}
            />
          );
        })}
      {isThird &&
        !signUp &&
        struggle.map((choices) => {
          return (
            <ChoicesCard
              choice={choices}
              key={Math.random()}
              onClick={isSignUp}
            />
          );
        })}
      {signUp && <SignUp />}
    </div>
  );
}
