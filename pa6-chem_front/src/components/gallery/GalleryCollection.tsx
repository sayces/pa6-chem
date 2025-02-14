import React from "react";
import page_styles from "../pages_styles/pages_styles.module.scss";
import gallery_styles from "./gallery.module.scss";

export default function GalleryCollection() {
  return (
    <div className={page_styles.page}>
      <div className={gallery_styles.gallery_page}>
        <h1>Коллекция галереи</h1>
        <div className={gallery_styles.gallery_container}>gallery</div>
      </div>
    </div>
  );
}
