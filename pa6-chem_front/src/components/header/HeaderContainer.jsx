import React from 'react';
import header_styles from './_header.module.scss';
import Logo from './header-items/Logo';


export default function HeaderContainer() {
  return (
    <div className={header_styles.header_container}>
      <div className={header_styles.header_box}>
        <Logo className={header_styles.logotype}/>
        <div>
          <p className={header_styles.description}>официальный сайт <span>youko nails</span></p>
        </div>
        <div className={header_styles.signup_button}>
          <p className={header_styles._button_text}>Home</p>
        </div> 
      </div>
    </div>
  )
}
