'use client'
import React from 'react'
import Style from './PointTitle.module.css'
import { motion } from 'motion/react'

type Props = {
  id: number,
  title: string,
}

export default function PointTitle({ id = 0, title = "skill" }: Props) {
  const titleVariants = {
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
    // <motion.div
    //   className={Style['title-container']}
    //   style={{ overflow: 'hidden' }}
    //   variants={titleVariants}
    //   initial="initial"
    //   animate="animate"
    // >
    <h2 className={Style.skill} id={id.toString()} > {title}</h2>
    // </motion.div>
  )
}