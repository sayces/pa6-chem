import React, { useEffect, useState } from "react";
import inputStyles from "./_input.module.scss";


export default function InputComponent({ inputProps }: any) {
  const [inputContent, setInputContent] = useState("");

  
  const handleInputOnInput = (e: any) => {
    setInputContent(e.target.value);
    console.log(inputContent)
  };



  
  return (
    
      <input
        className={inputStyles.inputField}
        placeholder={inputProps.placeholder}
        value={inputContent}
        onChange={handleInputOnInput}
      ></input>
    
  );
}
