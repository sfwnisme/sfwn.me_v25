"use client"
import React from 'react'
import Title from '../Title/Title'
import Styles from './Clients.module.css'
import { useDictionary } from '@/context/DictionaryProvider'
import Image from 'next/image'

export default function Clients() {
  const { clients } = useDictionary()
  console.log("oooooooooooooo", clients)
  const renderClients = clients.logos.map((client: string) => (
    <li key={client} className={Styles.client__item}><Image src={client} alt="" className={Styles.client__img} height={500} width={500} /></li>

  ))
  return (
    <section className={Styles.clients}>
      <Title>{clients.title}</Title>
      <ul className={Styles.clients__list}>
        {renderClients}
      </ul>
    </section>
  )
}
