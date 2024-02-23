import React from 'react';
import styles from './_links.module.scss';

export default function LinkLabel({link, onClick}: any) {
  return (
    <>
      <a className={styles.link} onClick={onClick} href={link.src}>{ link.content }</a>
    </>
  )
}
