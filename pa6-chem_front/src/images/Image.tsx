import React, { useState } from "react";
import page_styles from "../pages/pages_styles/pages_styles.module.scss";
import gallery_styles from "../components/gallery/_gallery.module.scss";
import { useAuthStore } from "../store/authStore";



export default function Image(
  { key, image, onClick }: { key?: string; image?: any; onClick?: () => void },
  
): React.JSX.Element {
  
  const user = useAuthStore((state) => state.user);

  return (
    <div
      key={key}
      tabIndex={image.id}
      className={gallery_styles.image_container}
    >
      <img
        src={`http://localhost:5002${image.url}`}
        alt={image.url}
        className={gallery_styles.image}
      />
      <div className={gallery_styles.image_overlay}>
        <button className={gallery_styles.image_like}>
          <p>like</p>
        </button>

        <button
          disabled={!user}
          onClick=
            {onClick}
          className={gallery_styles.image_delete}
        >
          <p>rm</p>
        </button>
      </div>
    </div>
  );
}
