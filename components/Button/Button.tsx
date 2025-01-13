'use client'
import React from 'react'
import Styles from './Button.module.css'
import { motion, MotionProps } from "motion/react"
type Props = {
  children: React.ReactNode;
} & ButtonType & MotionProps

type ButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export default function Button({ children, ...rest }: Props) {
  const buttonVariants = {
    initial: {
      scale: 0.3,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.2 }
    },
    hover: {
      scale: 1.15
    },
    tap: {
      scale: 0.9,
    }
  };

  const iconVariants = {
    initial: {
      scale: 10,
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      x: 10,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      x: 5,
      scale: 1.5,
    },
  };


  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      type='button' className={Styles.button} {...rest} >
      <span className={Styles.text}>
        {children}
      </span>
      <motion.div
        animate={{ x: 0, scale: 1 }}
        variants={iconVariants}
        className={Styles.arrowContainer}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="./arrow-icon.svg" alt="" className={Styles.arrow} />
      </motion.div>
    </motion.button>
  )
}