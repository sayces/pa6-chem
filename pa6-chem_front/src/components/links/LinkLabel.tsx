import React from "react";
import link_styles from "./_links.module.scss";
import { Link } from "react-router";


export default function LinkLabel({ children, onClick}: { children: React.ReactNode, onClick?: () => void | undefined  } ) {
  
  
  return <a onClick={onClick} className={link_styles.link}>{children}</a>;
}
