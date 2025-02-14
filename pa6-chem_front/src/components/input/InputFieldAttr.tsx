import React from "react";
import SmallButton from "../button/SmallButton";


export default function InputFieldAttr({ onClick, children, disabled}: any) {

  return <SmallButton onClick={onClick} disabled={disabled}>{children}</SmallButton>
}
