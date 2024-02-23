import React, { useState } from "react";
import InputComponent from "../../../input/InputComponent";
import authStyles from "./auth_styles.module.scss";
import inputs from "../../../input/input.json";
import LinkLabel from "../../../links/LinkLabel";
import InputFieldAttr from "../../../input/InputFieldAttr";
import inputStyles from "../../../input/_input.module.scss";

let customLink = [
  {
    src: "",
    content: "авторизация",
  },
  {
    src: "",
    content: "регистрация",
  },
];

export default function AuthForm() {
  const [inputContent, setInputContent] = useState('');
  
  const [toggleAuthLink, setToggleAuthLink] = useState(true);

  const handleAuthLink = (e: any) => {
    e.preventDefault();
    setToggleAuthLink(!toggleAuthLink);
  };

  const handleForm = (e: any) => {
    e.preventDefault();
  };

  

  return (
    <form onSubmit={handleForm} className={authStyles.authForm}>
      <LinkLabel
        onClick={handleAuthLink}
        link={toggleAuthLink ? customLink[0] : customLink[1]}
      />

      <div className={inputStyles.inputContainer}>
        <InputComponent
          onFocus={null}
          inputProps={inputs[0]}
          type="login"
          value={inputContent}
          
        />
        <InputFieldAttr type="submit" onClick={null}>
          {"okay"}
        </InputFieldAttr>
      </div>
      <div className={inputStyles.inputContainer}>
        <InputComponent
          onFocus={null}
          inputProps={inputs[1]}
          type="login"
        />
        <InputFieldAttr type="submit" onClick={null}>
          {"submit"}
        </InputFieldAttr>
      </div>
    </form>
  );
}
