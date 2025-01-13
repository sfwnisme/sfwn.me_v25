import Link from 'next/link'
import React from 'react'
import Styles from './LinkButton.module.css'

type Props = {
  children: React.ReactNode,
  href: string,
}

export default function LinkButton({ children = "link", href = "https://sfwn.me" }: Props) {
  return (
    <Link href={href} className={Styles.link}>
      <span className={Styles.text}>{children}</span>
      <img src="./arrow-icon-orange.svg" alt="" className={Styles.arrow} />
    </Link>
  )
}