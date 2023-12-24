import React from 'react';
import styles from './_button.scss';

export default function SmallButton() {
  return (
      <>
        <button className={styles._small_button}>
          <p className={styles._button_snippet}>
            🧪
          </p>
        </button> 
      </>
  )
}
