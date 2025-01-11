'use client'
import React from 'react'
import Styles from './Project.module.css'
import Link from 'next/link';
import PointTitle from '../PointTitle/PointTitle';
import { motion } from 'motion/react'

type Props = {
  id: number,
  title: string,
  period: string,
  image: string;
  href: string;
}

export default function Project({ id = 0, title = 'project title', period = '2024', image = '', href = "" }: Props) {
  const imgVariants = {
    offscreen: {
      scale: 1,
      opacity: 0.1,
      filter: 'blur(10px)'
    },
    onscreen: {
      scale: 1.2,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.3,
      opacity: 1,
      filter: 'blur(0px)',
    }
  }

  return (
    <Link href={href} className={Styles.project} id={id.toString()}>
      <figure className={Styles.project__figure}>
        <motion.img
          src={image} alt="" className={Styles.project__image}
          initial="offscreen"
          whileHover='hover'
          whileInView='onscreen'
          variants={imgVariants}
          viewport={{amount: 0, margin: '-400px'}}
        />
      </figure>
      <div className={Styles.project__content}>
        <PointTitle title={title} id={id} />
        <p className={Styles.project__period}>{period}</p>
      </div>
    </Link>
  )
}