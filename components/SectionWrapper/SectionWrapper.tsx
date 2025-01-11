import React from 'react'
import Styles from './SectionWrapper.module.css'

type Props = {
  readonly children: React.ReactNode;
}

export default function SectionWrapper({ children }: Props) {
  return (
    <section className={Styles['section-wrapper']}>{children}</section>
  )
}