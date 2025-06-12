"use client";
import React from "react";
import Styles from "./Hero.module.css";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { motion } from "motion/react";

export const Hero = () => {
  const nameVariants = {
    hidden: { opacity: 0, x: 500, scale: 1 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
      x: 0,
      scale: 1,
    },
  };
  const titleVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, transition: { duration: 0.5 }, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.2, x: "-100%" },
    visible: {
      opacity: [0.5, 0.8, 1],
      filter: "grayscale(1)",
      scale: [1, 1],
      x: [-500, 0],
      transition: { duration: 1 },
    },
  };

  return (
    <div className={Styles.hero}>
      <SectionWrapper>
        <figure>
          <motion.img
            src="/sfwn-rectangular.png"
            alt="Safwan Mohamed"
            className={Styles.hero__image}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          />
        </figure>
        <div className={Styles.hero__content}>
          <motion.h2
            className={Styles.hero__title}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Frontend Developer
          </motion.h2>
          <motion.h1
            className={`${Styles.hero__name}`}
            initial="hidden"
            animate="visible"
            variants={nameVariants}
          >
            Safwan Mohamed
          </motion.h1>
        </div>
      </SectionWrapper>
    </div>
  );
};
