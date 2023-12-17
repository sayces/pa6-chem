
import React from 'react';
import page_styles from '../../pages_styles/pages_styles.module.scss'
import auth_styles from '../../pages_styles/auth_styles.module.scss'
import MediumButton from '../../../button/MediumButton.tsx';

export default function MainPage() {
  return (
    <div className={page_styles.page}>
    <div className={page_styles.starter_page}>
    <div className={page_styles.main_page}>
      <div className={auth_styles.grid_container}>
        <div className={auth_styles.grid_element}>
          <div className={auth_styles.auth_form}>
            
            <div className={auth_styles.login_container}>
              <input className={auth_styles.login_input} placeholder='введите ваш логин'/>
            </div>
            <div className={auth_styles.password_container}>
              <input className={auth_styles.password_input} placeholder='введите ваш пароль' type='password'/>
            </div>

            <MediumButton />

          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}