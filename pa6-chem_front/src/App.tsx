import React, { useEffect, useState } from "react";
import PageMarkup from "./components/markup/PageMarkup";
import styles from "./sass/common.module.scss";

import { BrowserRouter as Router } from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import FooterContainer from "./components/footer/FooterContainer";

export function App() {
  return (
    <Router>
      
      <div className={styles.app}>
        <HeaderContainer />
        <PageMarkup />
        <FooterContainer />
      </div>
    </Router>
  );
}
