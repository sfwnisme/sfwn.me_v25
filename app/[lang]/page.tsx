// import React from 'react'
// import { Hero } from '../Hero/Hero'
// import Styles from './MainContent.module.css'
// import About from '../About/About'
// // import Clients from '../Clients/Clients'
// // import Projects from '../Projects/Projects'
// import Contact from '../Contact/Contact'
// import Footer from '../Footer/Footer'
// import { SkillsAndServices } from '../SkillsAndServices/SkillsAndServices'
// import Workspace from '../workspace/Workspace'
// // import Projects from '../Projects/Projects'

import About from "@/components/About/About"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer/Footer"
import { Hero } from "@/components/Hero/Hero"
import { SkillsAndServices } from "@/components/SkillsAndServices/SkillsAndServices"
import Workspace from "@/components/workspace/Workspace"
import Styles from './page.module.css'
import Clients from "@/components/Clients/Clients"

const page = async ({ params }: { params: { lang: "en" | "ar" } }) => {
  console.log("شسيبشسيبشسيبشسيبشيسبيب",params.lang)
  return (
    <div className={Styles['main-content']}>
      <Hero />
      <About />
      <SkillsAndServices />
      <Workspace lang={params.lang}/>
      <Clients />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default page
