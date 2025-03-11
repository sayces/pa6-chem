import React from "react";
import card_styles from "./_cards.module.scss";
import { useNavigate } from "react-router-dom";
import GalleryCollection from "../gallery/GalleryCollection";
import Calendar from "../calendar/Calendar";
import Services from "../services/Services";

export default function HomePageCard({ card }: { card: any }) {
  const navigate = useNavigate();

  if (!card) return null;
  const cardName = () => {
    if (card === "calendar") return "Календарь";
    else if (card === "gallery") return "Галерея";
    else if (card === "services") return "Услуги и прайс";
  };

  return (
    <div className={card_styles.card}>
      <a
        onClick={() => {
          navigate(`/${card}`);
        }}
      >
        <h1 className={card_styles.card_title}>{cardName()}</h1>
      </a>
    </div>
  );
}
