'use client'
import React from 'react'
import Style from './JobTitle.module.css'

type Props = {
  title: string,
  employer: string,
  period: string,
  nested?: Pick<Props, "title" | "period">[],
  type?: string,
}

export default function JobTitle({ title, employer, period, nested, type }: Props) {
  return (
    <div className={Style.job_title}>
      <h2 className={Style.job_title__title}>{!nested && title + " - "}{employer}</h2>
      <span className={Style.job_title__period}>{period} {type &&" • "+ type}</span>
      {nested && <ul className={Style.job_title__nest}>
        {nested?.map((nest) => (
          <li key={nest.period} className={Style.job_title__nest__item}> <span className={Style.job_title__nest__item__period}>{nest.period + " •"} </span>{nest.title}</li>
        ))}
      </ul>}
    </div>
  )
}