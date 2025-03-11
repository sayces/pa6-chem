import React, { useEffect, useState } from "react";
import header_styles from "./_header.module.scss";
import Logo from "./Logo";
import SmallButton from "../button/SmallButton";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function HeaderContainer() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLoginLogoutButton = () => {
    if (user) {
      logout();
    }
    navigate("/login");
  };

  const handleProfileButton = () => {
    navigate("/profile");
  };

  return (
    <header className={header_styles.header_container}>
      <div className={header_styles.header_box}>
        <section className={header_styles.logo_section}>
          <Logo />
          {user && (
            <div className={header_styles.username_box}>
              <p className={header_styles.username}>
                {user ? user.username : ""}
              </p>
              <a
                className={header_styles.profile_link}
                onClick={handleProfileButton}
              >
                профиль
              </a>
            </div>
          )}
        </section>

        <section className={header_styles.buttonSection}>
          <SmallButton onClick={handleLoginLogoutButton}>
            {!user ? "вход" : "выход"}
          </SmallButton>
        </section>
      </div>
    </header>
  );
}
