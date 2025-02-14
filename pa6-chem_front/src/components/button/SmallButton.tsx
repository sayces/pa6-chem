"strict mode";

import React from "react";
import buttonStyles from "./_button.module.scss";

export default function SmallButton({ children, onClick, onBlur, disabled}: any) {

  return <button className={buttonStyles.smallButton} onBlur={onBlur} onClick={onClick} disabled={disabled}>{children}</button>;
}
