import * as React from 'react'
import link_styles from './_links.module.scss'


export default function MediaLink(link: any) {
  return (
    <button className={link_styles.link_button}>
      <img className={link_styles.medialink} alt={link.name} src={link.link}/>
    </button>
    
  )
}
