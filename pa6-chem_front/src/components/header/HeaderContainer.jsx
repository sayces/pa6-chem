import React from 'react';
import header_styles from './_header.module.scss';
import Logo from './header-items/Logo';

export default function HeaderContainer() {
  return (
    <div className={header_styles.header_container}>

      <Logo className={header_styles.logotype} />

    </div>
  )
}
