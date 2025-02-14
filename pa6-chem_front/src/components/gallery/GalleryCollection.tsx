import React from "react";
import page_styles from "../pages/pages_styles/pages_styles.module.scss";
import gallery_styles from "./_gallery.module.scss";

export default function GalleryCollection() {
  return (
    <div className={gallery_styles.gallery_page}>
      <h1>Коллекция галереи</h1>
      <div className={gallery_styles.gallery_container}>hello</div>
    </div>
  );
}
