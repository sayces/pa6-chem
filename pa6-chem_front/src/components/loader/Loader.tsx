
import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import loader_styles from  "./_loader_styles.module.scss"; // Подключаем стили лоадера


  
export default function Loader() {

  const [isRefreshing, setIsRefreshing] = useState(false);
  let startY = 0;

  useEffect(() => {
    const handleTouchStart = (e: any) => {
      if (window.scrollY === 0) {
        startY = e.touches[0].clientY;
      }
      console.log("touch start");
    };

    const handleTouchMove = (e: any) => {
      if (window.scrollY === 0 && e.touches[0].clientY > startY + 50) {
        setIsRefreshing(true);
      }
      console.log("touch move");
    };

    const handleTouchEnd = () => {
      if (isRefreshing) {
        setTimeout(() => {
          setIsRefreshing(false);
        }, 1500);
      }
      console.log("touch end");
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isRefreshing]);



  return (
    <div>
    <div className={loader_styles.loader}>
      <p>Loader...</p>
      </div>
    <Outlet />
    
    </div>
  )
}
