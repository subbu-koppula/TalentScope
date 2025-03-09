"use client";
import * as React from "react";
import styles from "./AboutUs.module.css";

function Card({ heading, text, buttonText }) {
  return (
    <div className={styles.card}>
      <div className={styles.content2}>
        <div className={styles.contentTop}>
          <i className="bx bxs-cube bx-lg"></i>
          <div className={styles.content3}>
            <h2 className={styles.heading2}>{heading}</h2>
            <p className={styles.text2}>
              {text}
            </p>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.button}>
            <div className={styles.button2}>{buttonText}</div>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.sectionTitle}>
        <div className={styles.taglineWrapper}>About Us</div>
        <div className={styles.content}>
          <h1 className={styles.heading}>Master In-Demand Technologies</h1>
          <p className={styles.text}>
            Unlock your potential with our comprehensive training programs.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <Card heading="Explore Our Course Offerings" text="Learn full stack web development and more." buttonText="Enroll" />
          <Card heading="Why Choose Our Training?" text="Join a community of aspiring tech professionals." buttonText="Discover" />
          <Card heading="Technologies We Cover" text="Java, JavaScript, Python, Node, and more await you." buttonText="Start" />
          
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
