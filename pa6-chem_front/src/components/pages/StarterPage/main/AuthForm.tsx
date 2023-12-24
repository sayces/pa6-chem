import React from 'react'
import InputComponent from '../../../input/InputComponent';
import auth_styles from './auth_styles.scss';
import MediumButton from '../../../button/MediumButton';
import inputs from '../../../input/input.json'
import LinkComponent from '../../../links/LinkComponent';

let custom_link = {
  src: '',
  content: 'авторизация'

}

export default function AuthForm() {
  return (
    <div className={auth_styles.auth_form}>
            
            <div className={auth_styles.login_container}>
              <InputComponent input={inputs[0]}/>
            </div>
            <div className={auth_styles.password_container}>
              <InputComponent input={inputs[1]}/>
            </div>

            <MediumButton />

            <LinkComponent link={custom_link}/>

    </div>
  )
}
