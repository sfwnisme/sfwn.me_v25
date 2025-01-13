'use client'
import React from 'react'
import Styles from './Project.module.css'
import Link from 'next/link';
import PointTitle from '../PointTitle/PointTitle';
import { motion } from 'motion/react'

type Props = {
  id: number,
  title: string,
  period?: string,
  image: string;
  href: string;
}

export default function Project({ id = 0, title = 'project title', image = '', href = "" }: Props) {
  const imgVariants = {
    offscreen: {
      y: 100,
      opacity: 0.1,
      filter: 'grayscale(1)',
      transition: {
        duration: 0.5
      }
    },
    onscreen: {
      y: 0,
      opacity: 1,
      filter: 'grayscale(0)',
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 0.9,
      opacity: 1,
      filter: 'grayscale(0)',
      transition: {
        duration: 0.1
      }
    }
  }

  // const projectVariants = {
  //   offscreen: {
  //     opacity: 0.1,
  //   },
  //   onscreen: {
  //     opacity: 1,
  //   }
  // }

  return (
    <motion.div
      // initial='offscreen'
      // whileInView='onscreen'
      // variants={projectVariants}
      // viewport={{amount: 'some' }}
      initial="offscreen"
      // whileHover='hover'
      whileInView='onscreen'
      variants={imgVariants}
      viewport={{ amount: 'some' }}
    >
      <Link href={href} className={Styles.project} id={id.toString()}
      >
        <figure className={Styles.project__figure}>
          <motion.img
            src={image} alt="" className={Styles.project__image}
          // initial="offscreen"
          // whileHover='hover'
          // whileInView='onscreen'
          // variants={imgVariants}
          // viewport={{ amount: 'some' }}
          />
        </figure>
        <div className={Styles.project__content}>
          <PointTitle title={title} id={id} />
          {/* <p className={Styles.project__period}>{period}</p> */}
        </div>
      </Link>
    </motion.div>
  )
}