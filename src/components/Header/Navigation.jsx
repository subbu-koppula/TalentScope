import React from "react";
import styles from "./Header.module.css";

function Navigation() {
  return (
    <nav className={styles.navLinks}>
      <a href="/" className={styles.navItem}>
        Home
      </a>
      <a href="/courses" className={styles.navItem}>
        Courses
      </a>
      <a href="/python-analytics" className={styles.navItem}>
        About Us 
      </a>
      <a href="/contact" className={styles.navItem}>
        Contact Us
      </a>
    </nav>
  );
}

export default Navigation;
