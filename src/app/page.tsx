"use client";

import { useState } from "react";
import AnimatedTextSequence from "@/components/AnimatedTextSequence";
import DoveLetterLoader from "@/components/DoveLetterLoader";
import GiftBox from "@/components/GiftBox";

const MainComponent = () => {
  const [stage, setStage] = useState("home");

  const handleClick = () => {
    setStage("loading");
    setTimeout(() => {
      setStage("gift");
    }, 4000); // Show loading animation for 4 seconds
  };

  return (
    <div>
      {stage === "home" && <AnimatedTextSequence onClick={handleClick} />}
      {stage === "loading" && <DoveLetterLoader />}
      {stage === "gift" && <GiftBox />}
    </div>
  );
};

export default MainComponent;
