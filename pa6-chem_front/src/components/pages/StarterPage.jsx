import React from 'react'
import HeaderContainer from '../header/HeaderContainer'
import MainPage from './main/MainPage'
import pages_styles from './pages_styles/pages_styles.module.scss'


export default function StarterPage() {
  return (
    <>
      <HeaderContainer />
      <MainPage className={pages_styles.page}/>
    </>
  )
}
