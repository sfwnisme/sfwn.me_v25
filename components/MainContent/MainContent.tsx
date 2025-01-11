import React from 'react'
import { Hero } from '../Hero/Hero'
import Styles from './MainContent.module.css'
import About from '../About/About'
import Clients from '../Clients/Clients'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { SkillsAndServices } from '../SkillsAndServices/SkillsAndServices'

const MainContent = () => {
  return (
    <div className={Styles['main-content']}>
      <Hero />
      <About />
      <SkillsAndServices />
      <Clients />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default MainContent