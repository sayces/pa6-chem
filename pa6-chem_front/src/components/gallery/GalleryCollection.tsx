import React, { useEffect, useState } from "react";
import page_styles from "../pages/pages_styles/pages_styles.module.scss";
import gallery_styles from "./_gallery.module.scss";
import ImageUpload from "../imageUpload/ImageUpload";

export default function GalleryCollection() {
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:5002/api/gallery/images")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Ошибка загрузки галереи:", err));
  }, []);

  return (
    <div className={gallery_styles.gallery_page}>
      <h1>Коллекция галереи</h1>

      <div className={gallery_styles.gallery_container}>
        <ImageUpload />

        {images.map((image: any) => (
          <div key={image.id} className={gallery_styles.image_container}>
            <img
              src={`http://localhost:5002${image.url}`}
              alt={image.url}
              className={gallery_styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
