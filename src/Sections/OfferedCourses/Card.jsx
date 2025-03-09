"use client";
import React from "react";
import styles from "./Course.module.css";

const CourseCard = ({ img, title }) => {
  return (
    <article className={styles.courseCard}>
      <img
        src={img}
        alt={`${title} course thumbnail`}
        className={styles.courseImage}
      />
      <p className={styles.courseTitle}>{title}</p>
    </article>
  );
};

export default CourseCard;