import React from 'react'
import Style from './Skill.module.css'

type Props = {
  id: number,
  title: string,
}

export default function Skill({ id = 0, title = "skill" }: Props) {
  return (
    <h2 className={Style.skill} id={id.toString()}>{title}</h2>
  )
}