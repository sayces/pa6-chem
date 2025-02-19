import React from 'react'
import gallery_styles from '../_gallery.module.scss'

export default function Post(key: any, {children}: any) {
  return (
    <div className={gallery_styles.post} key={key}>
      {children}
    </div>
  )
}
