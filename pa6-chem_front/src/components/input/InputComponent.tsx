import React, { useEffect, useState } from "react";
import inputStyles from "./_input.module.scss";


export default function InputComponent({ inputProps, type }: any) {
  
  const [inputContent, setInputContent] = useState("");

  const handleInputOnInput = (e: any) => {
    setInputContent(e.target.value);
    
  };

  return (
    
      <input
        type={type}
        className={inputStyles.inputField}
        placeholder={inputProps.placeholder}
        value={inputContent}
        onChange={handleInputOnInput}
      ></input>
    
  );
}
