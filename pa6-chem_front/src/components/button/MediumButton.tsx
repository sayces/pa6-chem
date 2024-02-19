import React from 'react';
import styles from './_button.module.scss';

export default function SmallButton() {
  return (
      <>
        <button className={styles._medium_button}>
          <p className={styles._button_snippet}>
            регистрация
          </p>
        </button> 
      </>
  )
}
