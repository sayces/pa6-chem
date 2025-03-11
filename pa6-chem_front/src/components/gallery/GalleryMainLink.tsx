import React, { useState } from "react";
import gallery_styles from "./_gallery.module.scss";
import { useNavigate } from "react-router-dom";
import LinkLabel from "../links/LinkLabel";
import link_styles from "../links/_links.module.scss";
import { link } from "fs";

export default function GalleryMainLink() {
  const [toggleLink, setToggleLink] = useState(false);
  const navigate = useNavigate();

  const galleryRedirect = () => {
    navigate("/gallery");
  };

  const myPostsRedirect = () => {
    navigate("/gallery/me");
  };

  const handleToggleLink = () => {
    console.log("toggleLink: ", toggleLink);
    setToggleLink(!toggleLink);
    if (toggleLink) galleryRedirect();
    else myPostsRedirect();
  };

  return (
    <div className={link_styles.main_link_container}>
      <LinkLabel onClick={() =>{}}>
        <h1 className={link_styles.link}>
          {toggleLink ? "Мои посты" : "Галерея"}
        </h1>
      </LinkLabel>
      <svg
        className={link_styles.main_link_arrow}
        width="16"
        height="16"
        viewBox="0 0 198 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 9.87503L166.389 9.87505C175.072 9.87505 179.629 20.1797 173.788 26.603L122.5 83"
          stroke="black"
          stroke-width="18"
          stroke-linecap="round"
        />
        <path
          d="M189 119.125L31.6107 119.125C22.9285 119.125 18.3711 108.82 24.2125 102.397L75.5 46"
          stroke="red"
          stroke-width="18"
          stroke-linecap="round"
        />
      </svg>

      <LinkLabel onClick={handleToggleLink}>
        <h1 className={link_styles.link_alt}>
          {toggleLink ? "Галерея" : "Мои посты"}
        </h1>
      </LinkLabel>
    </div>
  );
}
