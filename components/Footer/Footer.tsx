import React from 'react'
import Styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // const 
  
  return (
    <footer className={Styles.footer}>
      <span className={Styles.footer__year}>&copy;{currentYear}</span>
      <ul className={Styles.footer__socials}>
        <li className={Styles.footer__social}>
          <a href="https://linkedin.com/in/sfwnisme" className={Styles.footer__social__link}>LinkedIn</a>
        </li>
        <li className={Styles.footer__social}>
          <a href="https://github.com/sfwnisme" className={Styles.footer__social__link}>Github</a>
        </li>
      </ul>
    </footer>
  )
}
