import React from 'react'
import Style from './loading.module.css'

export default function loading() {
  return (
    <div className={Style.loading}>
      <h1 className={Style.loading__text}>........</h1>
    </div>
  )
}
