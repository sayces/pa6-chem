import React from 'react'
import styles from './_header.module.scss'
import { useNavigate } from "react-router-dom";

export default function Logo() {

  const navigate = useNavigate();

  const handleLogoButton = () => {
    navigate("/");
  }

  return (
    <a className={styles.logotype} onClick={handleLogoButton}>chemistry</a>
  )
}
