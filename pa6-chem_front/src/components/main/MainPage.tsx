import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import page_styles from "./_pages_styles.module.scss";

export default function Main({ children }: any) {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  return (
    <main className={page_styles.main}>
      <div className={page_styles.page}>{children}</div>
    </main>
  );
}
