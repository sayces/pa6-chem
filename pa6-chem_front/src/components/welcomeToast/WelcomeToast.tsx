import React, { useEffect } from "react";
import page_styles from "../pages/pages_styles/pages_styles.module.scss";

export default function WelcomeToast({ message }: any) {
  useEffect(() => {
    
  }, []);

  return <div className={page_styles.welcome_toast}>{message}</div>;
}
