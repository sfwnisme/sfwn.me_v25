import React from 'react'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import Project from '../Project/Project'
import Title from '../Title/Title'
let id = 0

const projectsArray = [
  { id: id++, title: 'atwar', period: '2024', image: './projects/atwarco.co.gif', href: 'https://www.atwarco.co' },
  { id: id++, title: 'beanbon', period: '2024', image: './projects/beanbon.com.png', href: 'https://www.beanbon.com' },
  { id: id++, title: 'technogass', period: '2024', image: './projects/www.technogass.com.png', href: 'https://www.technogass.com' },
  { id: id++, title: 'alamanarat', period: '2024', image: './projects/almanarat.sa.png', href: 'https://almanarat.sa' },
  { id: id++, title: 'cheveu', period: '2024', image: './projects/cheveusolutions.com.png', href: 'https://cheveusolutions.com' },
  { id: id++, title: "4C's", period: '2024', image: './projects/jewelry4c.com.png', href: 'https://jewelry4c.com' },
  { id: id++, title: 'makzan elctra', period: '2024', image: './projects/makzanelc.com.png', href: 'https://makzanelc.com' },
  { id: id++, title: 'mieivc', period: '2024', image: './projects/mieivcksa.com.png', href: 'https://mieivcksa.com' },
  { id: id++, title: 'milllime', period: '2024', image: './projects/milllime.com.png', href: 'https://milllime.com' },
  { id: id++, title: 'plan and results', period: '2024', image: './projects/planandresults.vercel.app.png', href: 'https://planandresults.vercel.app' },
]

export default function Projects() {

  const renderProjects = projectsArray.map((project) => (
    <Project key={project.id} id={project.id} title={project.title} period={project.period} image={project.image} href={project.href} />
  ))

  return (
    <div>
      <Title>Projects</Title>
      <SectionWrapper>
        {renderProjects}
      </SectionWrapper>
    </div>
  )
}
