
import React from 'react'
import HeaderComponent from '../../header/HeaderComponent.tsx'
import FooterComponent from '../../footer/FooterComponent.tsx'

import PageMarkup from './main/PageMarkup.tsx'

export default function StarterPage() {
  return (
    <>
      <HeaderComponent />
      <PageMarkup />
      <FooterComponent />
    </>
  )
}
