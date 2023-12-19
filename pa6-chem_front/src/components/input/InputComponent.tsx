import React from 'react'
import styles from './_input.module.scss'

export default function InputComponent(input: any) {
  return (
    <>
      <input className={styles._input} placeholder={input.placeholder}/>
    </>
  )
}
