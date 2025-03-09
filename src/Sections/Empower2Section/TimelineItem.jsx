import React from "react";
import styles from "./Empower2.module.css";

const TimelineItem = ({ svgContent, heading, text, showDivider = true }) => {
  return (
    <section className={styles.timelineItem}>
      <div className={styles.iconWrapper}>
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
        {showDivider && <div className={styles.divider} />}
      </div>
      <article className={styles.timelineContent}>
        <h3 className={styles.timelineHeading}>{heading}</h3>
        <p className={styles.timelineText}>{text}</p>
      </article>
    </section>
  );
};

export default TimelineItem;
