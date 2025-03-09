import React from "react";
import styles from "./Header.module.css";
import LogoPic from "../../assets/logo.png";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img
        src={LogoPic}
        alt="TalentScope"
        className={styles.logo}
      />
      <p className={styles.logoText}>Talent Scope</p>
    </div>
  );
}

export default Logo;