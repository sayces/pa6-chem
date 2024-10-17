import React from 'react';
import styles from './_links.module.scss';



export default function LinkLabel({size, link, onClick}: any) {

  if (size === 'small') {
    return <a className={styles.smallLink} onClick={onClick} href={link.src}>{ link.content }</a>
  } else {
    return <a className={styles.link} onClick={onClick} href={link.src}>{ link.content }</a>
  }
}
