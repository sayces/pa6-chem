import React from 'react';
import header_styles from './_header.module.scss';
import Logo from './header-items/Logo';
import SmallButton from '../button/SmallButton';



export default function HeaderContainer() {
  return (
    <header className={header_styles.header_container}>
      <div className={header_styles.header_box}>
        <Logo/>
        <SmallButton />
       
      </div>
    </header>
  )
}
