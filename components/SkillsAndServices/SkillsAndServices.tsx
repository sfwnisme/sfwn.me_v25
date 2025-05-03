'use client'
import React from 'react'
import Styles from './SkillsAndServices.module.css'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import Title from '../Title/Title'
import PointTitle from '../PointTitle/PointTitle'

import { motion } from 'motion/react'

const skillsArray = [
  { id: 1, title: "HTML, CSS, JS, TS" },
  { id: 2, title: "Nodejs, React, Next.js, Expressjs, MongoDB" },
  { id: 7, title: "Git, GitHub, Mongoose, Prisma" },
]
const servicesArray = [
  { id: 1, title: "Web Development" },
  { id: 2, title: "Wordpress Development" },
  { id: 3, title: "Operation Management" },
  { id: 4, title: "Marketing Management" },
]

export const SkillsAndServices = () => {
  const sectionVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: ((custom: number = 1) => ({
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        // type: "spring",
        duration: 0.3 * custom,
      },
    })),
  }

  const titleVariant = {
    offscreen: {
      y: '100%',
      opacity: 0
    },
    onscreen: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3 * custom,
        ease: 'easeOut',
        delay: 0.1 * custom,
      }
    })
  }

  const renderSkills = skillsArray.map((skill, idx) => (
    <li key={skill.id} className={Styles['skill__item']}>
      <motion.div
        custom={++idx}
        initial="offscreen"
        whileInView="onscreen"
        variants={titleVariant}
        style={{ overflow: 'hidden' }}
      >
        <PointTitle id={skill.id} title={skill.title} />
      </motion.div>
    </li>
  ))
  const renderServices = servicesArray.map((service, idx) => (
    <li key={service.id} className={Styles['service__item']}>
      <motion.div
        custom={++idx}
        initial="offscreen"
        whileInView="onscreen"
        variants={titleVariant}
        style={{ overflow: 'hidden' }}
      >
        <PointTitle id={service.id} title={service.title} />
      </motion.div>
    </li>
  ))
  return (
    <SectionWrapper>
      <motion.div className={Styles.skills}
        initial="offscreen"
        whileInView="onscreen"
        variants={sectionVariants}
      >
        <Title>Skills</Title>
        <ul className={Styles.skills__list}>
          {renderSkills}
        </ul>
      </motion.div>
      <motion.div className={Styles.services}
        custom={2}
        initial="offscreen"
        whileInView="onscreen"
        variants={sectionVariants}
      >
        <Title>Services</Title>
        <ul className={Styles.services__list}>
          {renderServices}
        </ul>
      </motion.div>
    </SectionWrapper>
  )
}
