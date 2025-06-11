'use client'
import Style from './Work.module.css'
import { Book, GitCommit, Star } from 'lucide-react'
import { M_PLUS_1_Code } from 'next/font/google';
import React from 'react'
const font = M_PLUS_1_Code({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
type Repo = {
  name: string,
  commits: string,
  stargazers_count: string,
  description: string,
  html_url: string,
  language: string,
}
type Props = {
  repo: Repo
}

export default function Work({ repo }: Readonly<Props>) {
  return (
    <div className={`${Style.work} ${font.className}`}>
      <div className={Style['work__header']}>
        <Book size={22} color='var(--color-light-gray)' />
        <a href={repo.html_url} className={Style['work__title']} target='_blank'>{repo.name}</a>
      </div>
      <div className={Style['work__body']}>
        <div className={Style['work__description']}>{repo.description}</div>
      </div>
      <div className={Style['wrok__footer']}>
        <span className={Style['work__lang']}>{repo?.language}</span>
        <span className={Style['work__stars']}><Star size={15} color='var(--color-light-gray)' /> {repo.stargazers_count}</span>
        <span className={Style['work__commits']}><GitCommit size={22} color='var(--color-light-gray)' /> {repo.commits}</span>
      </div>
    </div>
  )
}
