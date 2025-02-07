"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import giftBoxImg from "../animations/giftbox.json";
import roseBouquetImg from "../animations/rose.json";
import Letter from "./Letter/Letter";


const GiftBox = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <div className="relative flex flex-col items-center">
        {/* Show Gift Box Initially */}
        {!isOpened && (
          <>
            <div className="mt-6 text-2xl font-semibold text-[#009ece]">
              Click karo box jaldi jaldi
            </div>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: -10 }}
              transition={{ yoyo: Infinity, duration: 0.5 }}
              className="cursor-pointer"
              onClick={() => setIsOpened(true)}
            >
              <Lottie animationData={giftBoxImg} className="w-[300px] h-[300px]" />
            </motion.div>
          </>
        )}

        {/* Show Rose + Letter after opening */}
        {isOpened && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <Lottie animationData={roseBouquetImg} className="w-[250px] h-[250px]" />
            <Letter />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GiftBox;
