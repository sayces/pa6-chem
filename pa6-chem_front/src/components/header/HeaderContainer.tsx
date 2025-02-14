import React, { useEffect, useState } from "react";
import headerStyles from "./_header.module.scss";
import Logo from "./header-items/Logo";
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
    <header className={headerStyles.header_container}>
      <div className={headerStyles.header_box}>
        <section className={headerStyles.logo_section}>
          <Logo />
          {user && (
            <div className={headerStyles.username_box}>
              <p className={headerStyles.username}>
                {user ? user.username : ""}
              </p>
              <a
                className={headerStyles.profile_link}
                onClick={handleProfileButton}
              >
                профиль
              </a>
            </div>
          )}
        </section>

        <section className={headerStyles.buttonSection}>
          <SmallButton onClick={handleLoginLogoutButton}>
            {!user ? "вход" : "выход"}
          </SmallButton>
          <SmallButton />
          <SmallButton />
        </section>
      </div>
    </header>
  );
}
