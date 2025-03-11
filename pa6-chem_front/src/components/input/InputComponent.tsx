import React, { useEffect, useState } from "react";
import inputStyles from "./_input.module.scss";

export default function InputComponent({
  inputProps,
  type,
  onChange,
  value,
}: any) {
  const [inputContent, setInputContent] = useState("");

  const handleInputOnChange = (e: any) => {
    setInputContent(e.target.value);
  };

  return (
    <input
      type={type}
      className={inputStyles.input_field}
      placeholder={inputProps.placeholder}
      value={value}
      onChange={onChange}
    ></input>
  );
}
