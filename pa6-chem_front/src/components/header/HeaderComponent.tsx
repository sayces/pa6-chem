import React, { useState } from 'react';
import headerStyles from './_header.module.scss';
import Logo from './header-items/Logo';
import SmallButton from '../button/SmallButton';



export default function HeaderContainer() {

  const [loginLinkIsActive, setLoginLinkIsActive] = useState(true)

  

  const handleLoginLinkOnHover = () => {
    setLoginLinkIsActive(true);
  }
  
  const handleLoginLinkOnBlur = () => {
    setLoginLinkIsActive(false);
  }

  return (
    <header className={headerStyles.header_container}>
      <div className={headerStyles.header_box}>
        <Logo/>
        <section className={headerStyles.buttonSection}>
          <SmallButton onClick={handleLoginLinkOnHover} onBlur={handleLoginLinkOnBlur}>{loginLinkIsActive && 'войти'}</SmallButton>
          <SmallButton />
          <SmallButton />
        </section>
        
       
      </div>
    </header>
  )
}
