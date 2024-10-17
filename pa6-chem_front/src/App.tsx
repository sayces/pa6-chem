import React, { useEffect, useState } from "react";
import PageMarkup from "./components/PageMarkup";
import styles from "./sass/common.module.scss";

export function App() {
  const [serverRes, setServerRes] = useState(null);

  useEffect(() => {
    fetch("/api")
    
      .then((res) => res.json())
      .then((res) => setServerRes(res));

      
  }, []);
console.log(serverRes);
  return (
    <div className={styles.app}>
      <PageMarkup />
    </div>
  );
}
