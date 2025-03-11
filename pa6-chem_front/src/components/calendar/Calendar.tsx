import React from 'react'
import calendar_styles from "./_calendar.module.scss"
import { useNavigate } from 'react-router-dom'


export default function () {
  const navigate = useNavigate();
  
  return (
    <div className={calendar_styles.calendar_page}>
      <a onClick={() => navigate("/calendar")}><h1>Календарь</h1></a>
    </div>
  )
}
