import React from 'react';
import styles from './_button.module.scss';

export default function MediumButton({content}: any) {
  return (
      <>
        <button className={styles.medium_button}>
          {content}
        </button> 
      </>
  )
}
