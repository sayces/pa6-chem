"strict mode";

import React from "react";
import buttonStyles from "./_button.module.scss";

export default function SmallButton({ children, onClick, onBlur}: any) {

  return <button className={buttonStyles.smallButton} onBlur={onBlur} onClick={onClick}>{children}</button>;
}
