import React from "react";
import page_styles from "../../pages_styles/pages_styles.module.scss";
import SignUpPage from "./SignUpPage";

export default function PageMarkup() {
  return (
    <main className={page_styles.page}>
      <div className={page_styles.starter_page}>
        <div className={page_styles.main_page}>
          <SignUpPage />
        </div>
      </div>
    </main>
  );
}
