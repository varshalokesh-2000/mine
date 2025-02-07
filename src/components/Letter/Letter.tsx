"use client";

import { useState } from "react";
import styles from "./Letter.module.scss";
import { motion } from "framer-motion";
import OurImage from '../../animations/image.webp';
import Image from "next/image";

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.envelope} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(true)}
      >
        {/* Letter inside Envelope */}
        <motion.div
          className={styles.letter}
          animate={
            isOpen ? { top: "50%", height: 250 } : { top: "100%", height: 0 }
          }
          transition={{ duration: 1 }}
        >
          <p className={styles.message}>
            Are are babu 😊,
            <br /> My Shona mona cutie oie 😘
            <br />
            Every day with you is special, not just today. Rose Day or not,
            every moment by your side feels beautiful.
            <br />I miss you so much! 🌹 You are my happiness, and I can't wait
            to be with you soon! 😘💕
            <br /><br />Yours always,
            Varsha 🙈
          </p>
          {/* <Image src={OurImage} alt="US 💞" width={200} height={200}  /> */}
        </motion.div>

        {/* Envelope Flap */}
        <div className={styles.triangleDown}></div>
        <div className={styles.triangleLeft}></div>
      </div>
    </div>
  );
};

export default Letter;
