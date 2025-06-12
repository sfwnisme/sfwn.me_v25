'use client'
import Style from './Work.module.css'
import { Book, FolderGit, GitCommit, GitCommitVertical, GitPullRequest, GitPullRequestArrow, Star, Timer, Upload } from 'lucide-react'
import { M_PLUS_1_Code } from 'next/font/google';
import React from 'react'
import LinkButton from '../Link/LinkButton';
import Button from '../Button/Button';
import { formatedDate } from '@/utils/utils';
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
  updated_at: string,
  created_at: string,
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
        {/* <LinkButton href={repo.html_url} variant="default">Demo</LinkButton> */}
        {/* <Button>Open</Button> */}
      </div>
      <div className={Style['work__body']}>
        <div className={Style['work__description']}>{repo.description}</div>
      </div>
      <div className={Style['wrok__footer']}>
        <span className={Style['work__lang']} title='language used'>{repo?.language}</span>
        <span className={Style['work__stars']} title='github stars'><Star size={13} color='var(--color-light-gray)' /> {repo.stargazers_count}</span>
        <span className={Style['work__commits']} title='github commits number'><GitCommit size={18} color='var(--color-light-gray)' /> {repo.commits}</span>
        <span className={Style['work__date']} title='first push'><FolderGit size={18} color='var(--color-light-gray)' /> {formatedDate(repo.created_at)}</span>
        <span className={Style['work__date']} title='last push'><GitCommitVertical size={18} color='var(--color-light-gray)' /> {formatedDate(repo.updated_at)}</span>
        <LinkButton href={repo.html_url} variant="default">Open repo</LinkButton>
        <LinkButton href={repo.html_url} variant="default">Demo</LinkButton>
      </div>
      {/* <br/>
      <div className={Style['wrok__footer']}>
        <LinkButton href={repo.html_url} variant="default">Open repo</LinkButton>
        <LinkButton href={repo.html_url} variant="default">Demo</LinkButton>
      </div> */}
    </div>
  )
}
