import React from "react";
import { useAuthStore } from "../../store/authStore";
import page_styles from "../main/_pages_styles.module.scss";
import MainPage from "../main/MainPage";
import { useState } from "react";
import WelcomeToast from "../welcome_toast/WelcomeToast";
import gallery_styles from "../gallery/_gallery.module.scss";
import GalleryCollection from "../gallery/GalleryCollection";

export default function HomePage({ children }: any) {
  const user = useAuthStore((state) => state.user);
  const toastMessage = "Чувствуйте себя, как дома";

  return (
    
      <div className={page_styles.home_page}>
        <>{toastMessage && user && <WelcomeToast message={toastMessage} />} </>
        {children}
      </div>
    
  );
}
