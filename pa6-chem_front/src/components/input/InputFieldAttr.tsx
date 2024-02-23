import React from "react";
import SmallButton from "../button/SmallButton";


export default function InputFieldAttr({ onClick, children}: any) {

  return <SmallButton onClick={onClick} >{children}</SmallButton>
}
