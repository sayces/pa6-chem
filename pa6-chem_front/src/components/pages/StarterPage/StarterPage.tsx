
import React from 'react'
import HeaderComponent from '../../header/HeaderComponent'
import FooterComponent from '../../footer/FooterComponent'

import PageMarkup from './main/PageMarkup'

export function StarterPage() {
  return (
    <>
      <HeaderComponent />
      <PageMarkup />
      <FooterComponent />
    </>
  )
}
