import * as React from 'react'
import link_styles from './_links.module.scss'



export default function MediaLink({linka}: any) {
  return (
    <button className={link_styles.link_button}>
      <img className={link_styles.medialink} alt={linka.name} src={linka.link} />
    </button>
  )
}
