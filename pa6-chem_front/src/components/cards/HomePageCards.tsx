import React from "react";
import card_styles from "./_cards.module.scss";

export default function HomePageCards({ children }: any) {
  return <div className={card_styles.homepage_cards}>
    {children}
    </div>;
}
