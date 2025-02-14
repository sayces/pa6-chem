import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import page_styles from "./pages_styles/pages_styles.module.scss";


export default function MainPage( {children}: any) {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  return <main className={page_styles.main}>{children}</main>;
}
