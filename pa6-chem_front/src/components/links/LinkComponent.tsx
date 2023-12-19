import React from 'react';
import styles from './_links.module.scss';

export default function LinkComponent(link: any) {
  return (
    <>
      <a className={styles.link} href={link.src}>{ link.content }</a>
    </>
  )
}
