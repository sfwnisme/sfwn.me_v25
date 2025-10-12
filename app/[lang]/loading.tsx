import React from 'react'
// import Style from './Loading.modules.css'
import Style from './loading.module.css'

export default function loading({params}: {params: {lang: "ar"|"en"}}) {
  console.log('loading params', params)
  return (
    <div className={Style.loading}>
      <h1 className={Style.loading__text}>........</h1>
    </div>
  )
}
