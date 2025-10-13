'use client'
import React from 'react'
import Styles from './SkillsAndServices.module.css'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import Title from '../Title/Title'
import PointTitle from '../PointTitle/PointTitle'
import { motion } from 'motion/react'
import { useDictionary } from '@/context/DictionaryProvider'

export const SkillsAndServices = () => {
  const { services, skills, titles } = useDictionary()
  const sectionVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: (() => ({
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.3,
      },
    })),
  }

  const titleVariant = {
    offscreen: {
      y: '100%',
      opacity: 0
    },
    onscreen: () => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        delay: 0.1,
      }
    })
  }

  const renderServices = services.map((service: string, idx: number) => (
    <li key={service} className={Styles['service__item']}>
      <motion.div
        custom={++idx}
        initial="offscreen"
        whileInView="onscreen"
        variants={titleVariant}
        style={{ overflow: 'hidden' }}
      >
        <PointTitle id={service.length} title={service} />
      </motion.div>
    </li>
  ))
  return (
    <SectionWrapper>
      <motion.div className={Styles.services}
        custom={2}
        initial="offscreen"
        whileInView="onscreen"
        variants={sectionVariants}
      >
        <Title>{titles.services}</Title>
        <ul className={Styles.services__list}>
          {renderServices}
        </ul>
      </motion.div>
      <motion.div className={Styles.skills}
        initial="offscreen"
        whileInView="onscreen"
        variants={sectionVariants}
        dir='ltr'
      >
        <Title>{titles.skills}</Title>
        <ul className={Styles.skills__list} >
          <li className={Styles['skill__item']}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariant}
              style={{ overflow: 'hidden' }}
            >
              <PointTitle id={skills.main.length} title={String(skills.main.join(", "))} />
            </motion.div>
          </li>
          <li className={Styles['skill__item']}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariant}
              style={{ overflow: 'hidden' }}
            >
              <PointTitle id={skills.frameworks.length} title={String(skills.frameworks.join(", "))} />
            </motion.div>
          </li>
          <li className={Styles['skill__item']}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariant}
              style={{ overflow: 'hidden' }}
            >
              <PointTitle id={skills.tools.length} title={String(skills.tools.join(", "))} />
            </motion.div>
          </li>
          <li className={Styles['skill__item']}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariant}
              style={{ overflow: 'hidden' }}
            >
              <PointTitle id={skills.libraries.length} title={String(skills.libraries.join(", "))} />
            </motion.div>
          </li>
          <li className={Styles['skill__item']}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariant}
              style={{ overflow: 'hidden' }}
            >
              <PointTitle id={skills.others.length} title={String(skills.others.join(", "))} />
            </motion.div>
          </li>
        </ul>
      </motion.div>

    </SectionWrapper>
  )
}
