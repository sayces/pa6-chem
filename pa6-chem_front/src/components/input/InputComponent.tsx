import React from 'react'
import styles from './_input.module.scss'

export default function InputComponent({ input }) {
  return (
    <>
      <input className={styles._input} placeholder={input.placeholder}/>
    </>
  )
}
