import React from 'react';
import photo from '../../../images/IMG_5288.jpg';
import background_image_styles from '../../../images/images_styles/img_styles.module.scss';
import page_styles from '../pages_styles/pages_styles.module.scss'

export default function MainPage() {
  return (
    <div className={page_styles.page}>

      <div className={background_image_styles.image_container}>

        <img src={photo} className={background_image_styles.background_image} alt="gallery" />

      </div>
    </div>
  )
}