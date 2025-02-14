import React, { useState, useEffect } from "react";
import page_styles from "../components/pages/pages_styles/pages_styles.module.scss";
import HeaderContainer from "./header/HeaderContainer";
import FooterContainer from "./footer/FooterContainer";
import { StarterPage } from "./entry/StarterPage";
import AuthForm from "./entry/AuthForm";
import AppRoutes from "../routes";

export default function PageMarkup() {
  return <AppRoutes />;
}
