import React from 'react'
import Styles from './Contact.module.css'
import Title from '../Title/Title'

export default function Contact() {
  return (
    <section className={Styles.contact} id="contact">
      <Title>Ready To Make Waves?</Title>
      <h1 className={Styles.contact__title}>Let&apos;s Collaborate</h1>
      <a href="mailto:safwanmohamedabdo@gmail.com" className={Styles.contact__email}>safwanmohamedabdo@gmail.com</a>
    </section>
  )
}
