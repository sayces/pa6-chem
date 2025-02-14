import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import page_styles from "./pages_styles/pages_styles.module.scss";
import MainPage from "./MainPage";
import { useState } from "react";
import WelcomeToast from "../welcomeToast/WelcomeToast";
import gallery_styles from '../gallery/_gallery.module.scss'  
import GalleryCollection from "../gallery/GalleryCollection";

export default function HomePage() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const toastMessage = "Чувствуйте себя, как дома";

  return (
    <div className={page_styles.page}>
      {toastMessage && user && <WelcomeToast message={toastMessage} />} //
      Всплывающее приветствие активируется при загрузке страницы при наличии
      пользователя в хранилище
      <div className={page_styles.home_page}>
        <GalleryCollection />
      </div>
    </div>
  );
}
