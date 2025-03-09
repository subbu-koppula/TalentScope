"use client";
import * as React from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import Logo from "./Logo";

function Header() {
  return (
    <>
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      /> */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Logo />
          <Navigation />
        </div>
      </header>
    </>
  );
}

export default Header;
