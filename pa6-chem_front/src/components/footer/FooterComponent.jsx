import React from 'react';
import footer_styles from './_header.module.scss';



export default function HeaderContainer() {
  return (
    <div className={header_styles.header_container}>
      <div className={header_styles.header_box}>
        <Logo className={header_styles.logotype}/>
        <div>
          <p className={header_styles.description}>официальный сайт <span>youko nails</span></p>
        </div>
        <div className={header_styles.button}>
          <p className={header_styles.signup_button}>Home</p>
        </div> 
      </div>
    </div>
  )
}
