"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import { motion } from "framer-motion";
import doveLetterAnimation from "../animations/dove-letter.json";

const DoveLetterLoader = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/gift-box"); // Redirects to GiftBox component
    }, 8000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 200, opacity: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        <Lottie animationData={doveLetterAnimation} className="w-[300px] h-[300px]" />
      </motion.div>
    </div>
  );
};

export default DoveLetterLoader;
