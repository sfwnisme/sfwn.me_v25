import Link from 'next/link'
import React from 'react'
import Style from './LinkButton.module.css'

type Props = {
  children: React.ReactNode,
  href: string,
  variant?: "orange" | "default"
}

export default function LinkButton({ children = "link", href = "https://sfwn.me", variant = 'orange' }: Props) {
  const variants = {
    default: Style['link__default'],
    orange: Style['link__orange'],
  }
  return (
    <Link href={href} className={`${Style.link} ${variants[variant]}`}>
      <span className={Style.text}>{children}</span>
      {/* <img src="./arrow-icon-orange.svg" alt="" className={Style.arrow} /> */}
    </Link>
  )
}