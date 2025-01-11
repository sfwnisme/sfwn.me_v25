'use client'
import React from 'react'
import Styles from './Nav.module.css'
import Button from '../Button/Button'
import { motion } from 'motion/react'

export default function Nav() {

  const logoVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <nav className={Styles.nav}>
      <figure className={Styles.nav__logo}>
        <motion.img variants={logoVariants} initial="hidden" animate="visible" src="/sfwn-logo-white.png" alt="" />
      </figure>
      <motion.div variants={logoVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className={Styles.nav__buttons}>
        <Button>CV</Button>
      </motion.div>
    </nav>
  )
}