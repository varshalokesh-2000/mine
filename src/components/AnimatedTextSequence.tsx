"use client";


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Indie_Flower,
  Permanent_Marker,
  Caveat,
  Bangers,
  Comic_Neue,
} from "next/font/google";
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// 🎨 Background Colors Based on Animations & Text
const BACKGROUNDS = [
  "#87CEEB", // Sky Blue (Sun & Clouds)
  "#F5DEB3", // Soft Beige (Monkey)
  "#FFC0CB", // Romantic Blush (Couples on Scooter)
  "#FF6347", // Deep Red & White (Dancing Heart)
  "#FFD1DC", // Soft Pink & White (404 Board with Heart)
  "#FFE4E1", // Pastel Pink (Teddies Hugging)
];

// Load fun Google Fonts
const comicFont = Comic_Neue({ subsets: ["latin"], weight: "700" });
const funkyFont = Bangers({ subsets: ["latin"], weight: "400" });
const whimsicalFont = Indie_Flower({ subsets: ["latin"], weight: "400" });
const cursiveFont = Caveat({ subsets: ["latin"], weight: "500" });
const funFont = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const fonts = [
  comicFont.className,
  funFont.className,
  whimsicalFont.className,
  cursiveFont.className,
  funkyFont.className,
];

// Import different animations for each text
import animation1 from "../animations/Animation-sun.json";
import animation2 from "../animations/monkey.json";
import animation3 from "../animations/scooter.json";
import animation4 from "../animations/heart.json";
import animation5 from "../animations/404.json";
import animation6 from "../animations/teddy.json";

import Tickle from "../animations/tickle.gif";
import Image from "next/image";

const messages = [
  "Oyy...",
  "Buddu 🤭",
  "Something special is waiting for you...",
  "Excited? 😉",
  "Oops, not so fast! 😶‍🌫️",
  "I will tell you what it is...",
];

const textStyles = [
  "text-6xl font-bold text-[#D70040]", // Rich Crimson Red
  "text-4xl font-black text-[#FF4500]", // Warm Sunset Orange
  "text-3xl italic font-semibold text-[#008080]", // Romantic Teal
  "text-5xl font-light text-[#6A5ACD]", // Soft Royal Purple
  "text-6xl font-bold text-[#C71585]", // Deep Rose Magenta
  "text-4xl font-mono text-[#800020]", // Burgundy Love
];

// Array of animations matching each message
const animations = [
  animation1,
  animation2,
  animation3,
  animation4,
  animation5,
  animation6,
];

// Array of motion effects for each message
const motionVariants = [
  {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    transition: { duration: 1 },
  },
  {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
    transition: { duration: 1.2 },
  },
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
    transition: { duration: 1.3 },
  },
  {
    initial: { opacity: 0, rotate: -5 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: 5 },
    transition: { duration: 1.1 },
  },
  {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 1.2 },
  },
  {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.3 },
    transition: { duration: 1.4 },
  },
];

const AnimatedTextSequence = ({ onClick }: { onClick: () => void }) => {
  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (index < messages.length) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 3000); // Increased delay to 3 seconds
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowButton(true), 1000);
    }
  }, [index]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 transition-colors duration-1000 ease-in-out"
      style={{ background: BACKGROUNDS[index] }}
    >
      {!showButton && (
        <motion.div
          key={index} // Re-renders when index changes
          {...motionVariants[index]} // Apply unique motion effect
          className="flex items-center gap-6"
        >
          <Lottie
            animationData={animations[index]}
            className="max-w-[250px] min-w-[250px] min-h-[250px]"
          />
          <h1 className={`${textStyles[index]} ${fonts[index]}`}>
            {messages[index]}
          </h1>
        </motion.div>
      )}

      {showButton && (
        <Image src={Tickle} width={250} height={250} alt="Tickle animation" />
      )}

      {showButton && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 px-8 py-4 rounded-xl text-xl shadow-lg transition-transform transform hover:scale-110"
          style={{ backgroundColor: "#FF6347", color: "#FFF" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#FFD700";
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FF6347";
            e.currentTarget.style.color = "#FFF";
          }}
          onClick={onClick}
        >
          Tum Khud Dekhlo
        </motion.button>
      )}
    </div>
  );
};

export default AnimatedTextSequence;
