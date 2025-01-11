'use client'
import React from 'react'
import Styles from './About.module.css'
import Title from '../Title/Title'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import PointTitle from '../PointTitle/PointTitle'
import { motion } from 'motion/react'

let id = 0

const experiencesArray = [
  { id: id++, title: 'Operation Specialist / Makzanelc', period: '2024 - Now' },
  { id: id++, title: 'Marketing Specialist / Planandresults', period: '2023 - Now' },
  { id: id++, title: 'Marketing Specialist / Technogas', period: '2024 - 2024' },
  { id: id++, title: 'Online Marketing Specialist / Elbity', period: '2021 - 2023' },
  { id: id++, title: 'Online Store Owner / Yemen Drop', period: '2018 - 2022' },
]

export default function About() {

  const spanVariant = {
    initial: {
      y: '100%',
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      }
    }
  }

  const titleVariant = {
    initial: {
      x: '-100%',
      opacity: 0
    },
    animate: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5 * custom,
        ease: 'easeOut',
        delay: 0.2 * custom,
      }
    })
  }

  const renderExperiences = experiencesArray.map((experience, idx) => (
    <li key={experience.id} className={Styles.experiences__item}>
      <motion.div
        variants={titleVariant}
        initial="initial"
        animate="animate"
        style={{ overflow: 'hidden' }}
        custom={++idx}
      >
        <PointTitle title={experience.title} id={experience.id} />
      </motion.div>
      <motion.div
        variants={spanVariant}
        initial="initial"
        animate="animate"
        style={{ overflow: 'hidden' }}
      >
        <span className={Styles.experience__span}>{experience.period}</span>
      </motion.div>
    </li>
  ))

  return (
    <SectionWrapper>
      <div className={Styles.experiences}>
        <Title>Experiences</Title>
        <ul className={Styles.experiences__list}>
          {renderExperiences}
        </ul>
      </div>
      <div className={Styles.brief}>
        <Title>Brief</Title>
        <motion.div
          variants={spanVariant}
          initial="initial"
          animate="animate"
          style={{ overflow: 'hidden' }}
        >
          <p className={Styles.brief__description}>
            Hi there! I&apos;m Safwan Mohamed, a Frontend Developer residing in the vibrant city of Manchester, KSA. Fueled by a passion for crafting captivating digital experiences, I thrive on pushing the boundaries of frontend. By staying attuned to the ever-evolving landscape of trends and technologies, I deliver innovative solutions that not only surpass client expectations but also create unforgettable user journeys.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
