import React from 'react';
import header_styles from './_header.module.scss';
import Logo from './header-items/Logo';


export default function HeaderContainer() {
  return (
    <div className={header_styles.header_container}>
      <div className={header_styles.header_box}>
        <Logo className={header_styles.logotype}/>
        <div className={header_styles.button}>
          <p className={header_styles.signup_button}>Home</p>
        </div> 
        {/* <div className={header_styles.button}>
          <p className={header_styles.home_button}>Домой</p>
        </div>  */}

      </div>
      

    </div>
  )
}
