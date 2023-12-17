
import React from 'react'
import HeaderComponent from '../../header/HeaderComponent.tsx'
import FooterComponent from '../../footer/FooterComponent.tsx'
// import MainPage from './main/MainPage'
import SignUpPage from './main/SignUpPage.tsx'

export default function StarterPage() {
  return (
    <>
      <HeaderComponent />
      <SignUpPage />
      <FooterComponent />
    </>
  )
}
