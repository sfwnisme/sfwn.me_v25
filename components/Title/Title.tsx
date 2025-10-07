'use client'
import React from 'react'
import Styles from './Title.module.css'
import { motion } from 'motion/react'
type Props = {
  children: React.ReactNode;
}

export default function Title({ children }: Props) {
  const titleVariants = {
    initial: {
      y: '100%',
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  const arrowVariants = {
    initial: {
      x: '-100%',
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div className={Styles['title-container']} style={{ overflow: 'hidden' }}>
      <motion.img
        src='./title-arrow2.svg' alt="" className={Styles.title__arrow}
        variants={arrowVariants}
        initial="initial"
        animate="animate"
      />
      <motion.h1
        className={Styles.title}
        variants={titleVariants}
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.h1>
    </div>
  )
}