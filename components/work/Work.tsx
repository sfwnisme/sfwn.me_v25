'use client'
import Style from './Work.module.css'
import { Book, FolderGit, GitCommit, GitCommitVertical, Star } from 'lucide-react'
import React from 'react'
import LinkButton from '../Link/LinkButton';
import { formatedDate } from '@/utils/utils';
import { motion } from 'motion/react'

type Repo = {
  id: number,
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

const titleVariant = {
  offscreen: {
    y: '100%',
    opacity: 0
  },
  onscreen: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3 * custom,
      ease: 'easeOut',
      delay: 0.1 * custom,
    }
  })
}
export default function Work({ repo }: Readonly<Props>) {
  return (
    <div className={Style.work}>
      <motion.div
        custom={1}
        initial="offscreen"
        whileInView="onscreen"
        variants={titleVariant}
        style={{ overflow: 'hidden' }}
        className={Style['work__header']}>
        <Book size={22} color='var(--color-light-gray)' />
        <a href={repo.html_url} className={Style['work__title']} target='_blank'>{repo.name}</a>
      </motion.div>
      <motion.div
        custom={1}
        initial="offscreen"
        whileInView="onscreen"
        variants={titleVariant}
        style={{ overflow: 'hidden' }}
        className={Style['work__body']}>
        <div className={Style['work__description']}>{repo.description}</div>
      </motion.div>
      <motion.div
        custom={1}
        initial="offscreen"
        whileInView="onscreen"
        variants={titleVariant}
        style={{ overflow: 'hidden' }}
        className={Style['wrok__footer']}>
        <span className={Style['work__lang']} title='language used'>{repo?.language}</span>
        <span className={Style['work__stars']} title='github stars'><Star size={13} color='var(--color-light-gray)' /> {repo.stargazers_count}</span>
        <span className={Style['work__commits']} title='github commits number'><GitCommit size={18} color='var(--color-light-gray)' /> {repo.commits}</span>
        <span className={Style['work__date']} title='first push'><FolderGit size={18} color='var(--color-light-gray)' /> {formatedDate(repo.created_at)}</span>
        <span className={Style['work__date']} title='last push'><GitCommitVertical size={18} color='var(--color-light-gray)' /> {formatedDate(repo.updated_at)}</span>
        <LinkButton href={repo.html_url} variant="default">Open repo</LinkButton>
        <LinkButton href={repo.html_url} variant="default">Demo</LinkButton>
      </motion.div>
      {/* <br/>
      <div className={Style['wrok__footer']}>
        <LinkButton href={repo.html_url} variant="default">Open repo</LinkButton>
        <LinkButton href={repo.html_url} variant="default">Demo</LinkButton>
      </div> */}
    </div>
  )
}
