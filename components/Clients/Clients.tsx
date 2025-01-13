import React from 'react'
import Title from '../Title/Title'
import Styles from './Clients.module.css'

export default function Clients() {
  return (
    <section className={Styles.clients}>
      <Title>Trusted By</Title>
      <ul className={Styles.clients__list}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <li className={Styles.client__item}><img src="https://static-00.iconduck.com/assets.00/google-icon-1024x337-2t1ovfuf.png" alt="" className={Styles.client__img} /></li>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <li className={Styles.client__item}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1024px-IBM_logo.svg.png" alt="" className={Styles.client__img} /></li>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <li className={Styles.client__item}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" alt="" className={Styles.client__img} /></li>
      </ul>
    </section>
  )
}
