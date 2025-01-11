'use client'
import React from 'react'
import Styles from './Nav.module.css'
import Button from '../Button/Button'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'

export default function Nav() {
  const router = useRouter()
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
        <Button onClick={() => router.push('https://docs.google.com/document/d/1uSzOK67JPBiA6Y_7me9PFl3eLYMgJ4d9af-Oi6GlbWc/edit?tab=t.0#heading=h.yieyffp1owqb')}>
          CV
        </Button>
      </motion.div>
    </nav>
  )
}