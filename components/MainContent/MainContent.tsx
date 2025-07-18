
import React from 'react'
import { Hero } from '../Hero/Hero'
import Styles from './MainContent.module.css'
import About from '../About/About'
// import Clients from '../Clients/Clients'
// import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { SkillsAndServices } from '../SkillsAndServices/SkillsAndServices'
import Workspace from '../workspace/Workspace'
// import Projects from '../Projects/Projects'

const MainContent = () => {
  return (
    <div className={Styles['main-content']}>
      <Hero />
      <About />
      <SkillsAndServices />
      <Workspace />
      {/* <Clients /> */}
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default MainContent
