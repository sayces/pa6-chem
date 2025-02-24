import React, { useState, useEffect } from "react";
import page_styles from "../pages/pages_styles/pages_styles.module.scss";
import gallery_styles from "../components/gallery/_gallery.module.scss";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export default function Image({
  image,
  onDelete,
  showBtn,
}: {
  image?: any;
  onDelete?: () => void;
  showBtn?: boolean;
}): React.JSX.Element {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);

  useEffect(() => {

  }, [])

  return (
    <div
      key={image.id}
      tabIndex={image.id}
      className={gallery_styles.image_container}
    >
      <img
        src={`http://localhost:5002${image.url}`}
        alt={image.url}
        className={gallery_styles.image}
      />

      <div className={gallery_styles.image_overlay}>
        
        {showBtn ? (
          <button
            disabled={!user}
            onClick={onDelete}
            className={gallery_styles.image_delete}
          >
            <p>rm</p>
          </button>
        ) : (
          <button className={gallery_styles.image_like}>
          <p>like</p>
        </button>
        )}
      </div>
    </div>
  );
}
