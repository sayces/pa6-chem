import React from 'react'
import InputComponent from '../../../input/InputComponent.tsx';
import auth_styles from './auth_styles.module.scss';
import MediumButton from '../../../button/MediumButton.tsx';
import inputs from '../../../input/input.json'
import LinkComponent from '../../../links/LinkComponent.tsx';

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
