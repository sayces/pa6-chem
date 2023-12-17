import React from 'react';
import header_styles from './_header.module.scss';
import Logo from './header-items/Logo.tsx';
import SmallButton from '../button/SmallButton.tsx';



export default function HeaderContainer() {
  return (
    <header className={header_styles.header_container}>
      <div className={header_styles.header_box}>
        <Logo className={header_styles.logotype}/>
        <SmallButton />
       
      </div>
    </header>
  )
}