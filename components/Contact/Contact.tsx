"use client"
import React from 'react'
import Styles from './Contact.module.css'
import Title from '../Title/Title'
import { useDictionary } from '@/context/DictionaryProvider'
// import LinkButton from '../Link/LinkButton'

export default function Contact() {
  const {titles, contact} = useDictionary()
  return (
    <section className={Styles.contact} id="contact">
      <Title>{titles.contact}</Title>
      <h1 className={Styles.contact__title}>{contact.title}</h1>
      <a href="mailto:safwanmabdo@gmail.com" className={Styles.contact__email}>safwanmabdo@gmail.com</a>
    </section>
  )
}
