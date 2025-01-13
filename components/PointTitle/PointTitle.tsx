'use client'
import React from 'react'
import Style from './PointTitle.module.css'

type Props = {
  id: number,
  title: string,
}

export default function PointTitle({ id = 0, title = "skill" }: Props) {
  return (
    <h2 className={Style.skill} id={id.toString()} > {title}</h2>
  )
}