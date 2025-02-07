"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import AnimatedTextSequence from "@/components/AnimatedTextSequence";

// Disable SSR for these components
const DoveLetterLoader = dynamic(() => import("@/components/DoveLetterLoader"), { ssr: false });
const GiftBox = dynamic(() => import("@/components/GiftBox"), { ssr: false });

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
