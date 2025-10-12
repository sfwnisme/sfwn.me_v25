'use client'
import React from 'react'
import Styles from './About.module.css'
import Title from '../Title/Title'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { motion } from 'motion/react'
import LinkButton from '../Link/LinkButton'
import JobTitle from '../job-title/JobTitle'
import { useDictionary } from '@/context/DictionaryProvider'

export default function About() {
  const { experience, user: { brief }, titles } = useDictionary()

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
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.2 * custom,
      }
    })
  }
  type Experience = {
    title: string,
    employer: string,
    period: string,
    nested?: Pick<Experience, "title" | "period">[],
    type?: string,
  }
  const renderExperiences = experience.map((experience: Experience, idx: number) => (
    <li key={experience.period} className={Styles.experiences__item}>
      <motion.div
        variants={titleVariant}
        initial="initial"
        animate="animate"
        style={{ overflow: 'hidden' }}
        custom={idx}
      >
        <JobTitle {...experience} />
      </motion.div>
    </li>
  ))

  return (
    <SectionWrapper>
      <div className={Styles.experiences}>
        <Title>{titles.experiences}</Title>
        <ul className={Styles.experiences__list}>
          {renderExperiences}
        </ul>
      </div>
      <div className={Styles.brief}>
        <Title>{titles.brief}</Title>
        <motion.div
          variants={spanVariant}
          initial="initial"
          animate="animate"
          style={{ overflow: 'hidden' }}
        >
          <p className={Styles.brief__description}>
            {brief}
            <br />
            <br />
            <q className={Styles.brief__quote}>Recently, I created the <LinkButton href='https://github.com/sfwnisme/visi' variant='default'>VISI</LinkButton> npm package. It may help you simplify conditional rendering in React.js.</q>
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
