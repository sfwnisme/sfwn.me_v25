import React from 'react'
import Styles from './Projects.module.css'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import Project from '../Project/Project'
let id = 0

const projectsArray = [
  { id: id++, title: 'Project Title', period: '2024', image: 'https://static.wixstatic.com/media/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png/v1/fill/w_920,h_608,al_c,q_90/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png', href: 'https://sfwn.me' },
  { id: id++, title: 'Project Title', period: '2024', image: 'https://static.wixstatic.com/media/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png/v1/fill/w_920,h_608,al_c,q_90/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png', href: 'https://sfwn.me' },
  { id: id++, title: 'Project Title', period: '2024', image: 'https://static.wixstatic.com/media/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png/v1/fill/w_920,h_608,al_c,q_90/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png', href: 'https://sfwn.me' },
  { id: id++, title: 'Project Title', period: '2024', image: 'https://static.wixstatic.com/media/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png/v1/fill/w_920,h_608,al_c,q_90/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png', href: 'https://sfwn.me' },
  { id: id++, title: 'Project Title', period: '2024', image: 'https://static.wixstatic.com/media/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png/v1/fill/w_920,h_608,al_c,q_90/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png', href: 'https://sfwn.me' },
  { id: id++, title: 'Project Title', period: '2024', image: 'https://static.wixstatic.com/media/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png/v1/fill/w_920,h_608,al_c,q_90/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png', href: 'https://sfwn.me' },
]

export default function Projects() {

  const renderProjects = projectsArray.map((project) => (
    <Project key={project.id} id={project.id} title={project.title} period={project.period} image={project.image} href={project.href} />
  ))

  return (
    <div>
      <SectionWrapper>
        {renderProjects}
      </SectionWrapper>
    </div>
  )
}
