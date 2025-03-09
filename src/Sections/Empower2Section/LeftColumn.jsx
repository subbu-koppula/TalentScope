import * as React from "react";
import styles from "./Empower2.module.css";

function LeftColumn() {
  return (
    <section className={styles.leftColumn}>
      <header>
        <p className={styles.taglineWrapper}>Empower</p>
        <h1 className={styles.heading}>
          Unlock Your Potential with Our Training
        </h1>
      </header>
      <div className={styles.actions}>
        <button className={styles.primaryButton}>Learn</button>
        <button className={styles.secondaryButton}>
          <span>Join</span>
          <i className="bx bx-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}

export default LeftColumn;