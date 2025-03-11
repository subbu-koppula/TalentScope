"use client";
import React from "react";
import styles from "./Empower.module.css";


const Empower = () => {
  return (
    <section id="Empower1" className={styles.layout25}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <header className={styles.sectionTitle}>
              <p className={styles.taglineWrapper}>Empower</p>
              <div className={styles.contentInner}>
                <h1 className={styles.heading}>
                  Unlock Your Potential with Talent Scope
                </h1>
                <p className={styles.description}>
                  At Talent Scope, we provide comprehensive training tailored
                  for aspiring software professionals. Our courses are designed
                  to equip you with the skills needed to excel in the tech
                  industry.
                </p>
              </div>
            </header>

            <div className={styles.list}>
              <div className={styles.listItem}>
                <strong className={styles.number}>90%</strong>
                <p className={styles.statDescription}>
                  High job placement success rate for graduates.
                </p>
              </div>
              <div className={styles.listItem}>
                <strong className={styles.number}>Expert</strong>
                <p className={styles.statDescription}>
                  Learn from industry professionals with real-world experience.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.button}>
              <span className={styles.button3}>Join</span>
            </button>
            <button className={styles.button2}>
              <span className={styles.button3}>Discover</span>
              <i className="bx bx-chevron-right"></i> 
            </button>
          </div>
        </div>
        <div className={styles.rightSection}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/17ccf89badbf1e3fe054f04a29f875141bbb895a20fb56b341f3dfd22ee24c47?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd"
              alt="Training program illustration"
              className={styles.heroImage}
            />
          </div>
      </div>
    </section>
  );
};

export default Empower;
