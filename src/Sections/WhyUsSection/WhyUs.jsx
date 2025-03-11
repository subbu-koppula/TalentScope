"use client";
import React from "react";
import styles from "./WhyUs.module.css";
import FeatureCard from "./FeatureCard";

const WhyUs = () => {
  const features = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb47ebfb43ffd8254f4c7326004687cddf9cc640604b5f6af20fd90da507e3dd?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
      title: "Our Unique Approach",
      description:
        "Experience top-notch resources tailored for your learning journey and career growth.",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e0eb2e532784fb2466cbda2de814993e1c56a5451ca77b948b8d0e5d3805b4c9?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
      title: "Customized Learning",
      description:
        "Programs designed to fit your specific career goals and learning pace.",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bee864e21bf1f865bbf630abfd88fff6d14b8ff1b6d8279a6148f28ad26881c8?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
      title: "Career Coaching",
      description:
        "Receive guidance from industry experts to navigate your career path effectively.",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5fedc10fa70d05bd52a270f8322c9e455218f315aa9884b253d9b55b5aa5daab?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
      title: "Expert Instructors",
      description:
        "Learn from seasoned professionals with real-world experience in software development.",
    },
  ];

  return (
    <section id="WhyUs" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.featureList}>
            <div className={styles.grid}>
              {features.slice(0, 2).map((feature, index) => (
                <FeatureCard
                  key={index}
                  iconSrc={feature.iconSrc}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            <div className={styles.gridSecond}>
              {features.slice(2, 4).map((feature, index) => (
                <FeatureCard
                  key={index}
                  iconSrc={feature.iconSrc}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          <div className={styles.actions}>
            <button className={`${styles.button} ${styles.primary}`}>
              Learn More
            </button>
            <button className={`${styles.button} ${styles.secondary}`}>
              Sign Up
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
        {/* <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/02d919d13a5374932f5aed772aecb81a069fb160024c1a55ce05f72b870e1277?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd"
          alt="Featured illustration"
          className={styles.featuredImage}
        /> */}
        <div className={styles.rightSection}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02d919d13a5374932f5aed772aecb81a069fb160024c1a55ce05f72b870e1277?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd"
            alt="Featured illustration"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
