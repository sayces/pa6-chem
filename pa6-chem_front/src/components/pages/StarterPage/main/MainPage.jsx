
import React from 'react';
import page_styles from '../../pages_styles/pages_styles.module.scss'

export default function MainPage() {
  return (
    <div className={page_styles.page}>
    <div className={page_styles.starter_page}>
    <div className={page_styles.main_page}>
      <div className={page_styles.grid_container}>
        <div className={page_styles.grid_element}>
          <p>Это официальный сайт маникюрного салона 
           <br /><span>youko nails</span></p>
        </div>
        <div className={page_styles.grid_element}><p>2</p></div>
        <div className={page_styles.grid_element}><p>3</p></div>
        
      </div>
    </div>
    </div>
    </div>
  )
}