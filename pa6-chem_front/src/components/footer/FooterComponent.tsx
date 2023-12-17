import React from 'react';
import footer_styles from './_footer.module.scss';



export default function HeaderContainer() {
  return (
    <footer className={footer_styles.footer_container}>
      <div className={footer_styles.footer_box}>
        
        <div>
          <p className={footer_styles.main_description}>официальный сайт <span>youko nails</span></p>
        </div>
        
      </div>
    </footer>
  )
}
