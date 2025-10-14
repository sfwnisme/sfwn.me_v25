"use client";
import React, { useState } from "react";
import Styles from "./Hero.module.css";
import { motion } from "motion/react";
import Image from "next/image";
import { useDictionary } from "@/context/DictionaryProvider";
import { usePathname } from "next/navigation";

export const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const lang = usePathname().split(",")[0]
  const dict = useDictionary()
  const { first_name, second_name, job_title } = dict.user

  const isAr = lang === "/ar"
  const nameVariants = {
    hidden: { opacity: 0, x: isAr ? -500 : 500, scale: 1 },
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

  const imageVariantsVisible = {
    visible: {
      opacity: [0.5, 0.8, 1],
      scale: [1, 1],
      x: isAr ? [500, 0] : [-500, 0],
      transition: { duration: 1 },
    },
  };
  const imageVariantsHidden = { hidden: { opacity: 0, scale: 0.2, x: isAr ? "100%" : "-100%" }, }

  return (
    <div>
      <div className={Styles.hero}>
        <motion.figure
          className={Styles.hero__figure}
          variants={isImageLoaded ? imageVariantsVisible : imageVariantsHidden}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/sfwn-orange-rounded-20.webp"
            alt="Safwan Mohamed"
            className={Styles.hero__image}
            width={2000}
            height={2000}
            onLoad={() => setIsImageLoaded(true)}
          />
        </motion.figure>
        <div className={Styles.hero__content}>
          <motion.h2
            className={Styles.hero__title}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {job_title}
          </motion.h2>
          <motion.h1
            className={`${Styles.hero__name}`}
            initial="hidden"
            animate="visible"
            variants={nameVariants}
          >
            {first_name} {second_name}
          </motion.h1>
        </div>
      </div>
    </div>
  );
};
