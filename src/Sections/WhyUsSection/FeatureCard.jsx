import React from "react";
import styles from "./WhyUs.module.css";

const FeatureCard = ({ iconSrc, title, description }) => {
  return (
    <article className={styles.card}>
      <img src={iconSrc} alt="" className={styles.icon} aria-hidden="true" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default FeatureCard;
