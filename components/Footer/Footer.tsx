'use client'
import React, { useLayoutEffect, useState } from 'react'
import Styles from './Footer.module.css'
import {Moon, Sun } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [themeIcon, setThemeIcon] = useState("")
  console.log("q", themeIcon)

  const lang = usePathname().split(",")[0]
  console.log("pathname", lang)

  // const 
  // Add a function to toggle a CSS class on the body when the theme button is clicked
  const handleThemeToggle = () => {
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('light');
      // Save the class to localStorage
      if (document.body.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
        setThemeIcon("light")
      } else {
        localStorage.setItem('theme', 'dark');
        setThemeIcon("dark")
      }
    }
  };

  useLayoutEffect(() => {
    if (localStorage.getItem("theme") === 'light') {
      document.body.classList.add("light")
      setThemeIcon("light")
    } else {
      document.body.classList.remove("dark")
      setThemeIcon("dark")
    }
  }, [])
  console.log("q2", themeIcon)

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
        <li className={`${Styles.footer__social} ${Styles.footer__controllers}`}>
          <button className={Styles.footer__theme_button} onClick={handleThemeToggle}>{themeIcon !== "light" ? <Sun /> : <Moon />}</button>
          <Link
            href={lang === "/ar" ? "/en" : "/ar"}
            className={Styles.footer__lang_button}
          >
            {/* <button> */}
              {lang === "/ar" ? "EN" : "ع"}
            {/* </button> */}
          </Link>
        </li>
      </ul>
    </footer>
  )
}
