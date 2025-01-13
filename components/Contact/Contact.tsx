import React from 'react'
import Styles from './Contact.module.css'
import Title from '../Title/Title'
import LinkButton from '../Link/LinkButton'

export default function Contact() {
  return (
    <section className={Styles.contact} id="contact">
      <Title>Ready To Make Waves?</Title>
      <h1 className={Styles.contact__title}>Let&apos;s Collaborate</h1>
      <div style={{ paddingInlineStart: '1rem', textAlign: 'right' }}>
        <LinkButton href="mailto:safwanmohamedabdo@gmail.com">
          Send Me Email
        </LinkButton>
      </div>
    </section>
  )
}
