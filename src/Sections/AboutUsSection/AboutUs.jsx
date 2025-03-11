"use client";
import * as React from "react";
import Courses from "../../components/OfferedCourses/Courses";
import styles from "./AboutUs.module.css";

function Card({ heading, text, buttonText,href, onClick }) {
  return (
    <div className={styles.card}>
      <div className={styles.content2}>
        <div className={styles.contentTop}>
          <i className="bx bxs-cube bx-lg"></i>
          <div className={styles.content3}>
            <h2 className={styles.heading2}>{heading}</h2>
            <p className={styles.text2}>{text}</p>
          </div>
        </div>
        <div className={styles.actions}>
          <a href={href}>
          <button className={styles.button} onClick={onClick}>
            <div className={styles.button2}>{buttonText}</div>
            <i className="bx bx-chevron-right"></i>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  const [isCoursesVisible, setCoursesVisible] = React.useState(false);

  const toggleCourses = () => {
    setCoursesVisible((prev) => !prev);
  };

  return (
    <>
    <section id="AboutUs" className={styles.aboutUs}>
      <div className={styles.sectionTitle}>
        <div className={styles.taglineWrapper}>About Us</div>
        <div className={styles.content}>
          <h1 className={styles.heading}>Master In-Demand Technologies</h1>
          <p className={styles.text}>
            Unlock your potential with our comprehensive training programs.
          </p>
        </div>
      </div>
      <div className={styles.container}> Courses
            onClick            onClick={toggleCourses}
        <div className={styles.row}>
          <Card
            heading="Explore Our Course Offerings"
            text="Learn about the programs we conduct."
            buttonText="Know More"
            href="#Empower2"
          />
          <Card
            heading="Why Choose Our Training?"
            text="Join a community of aspiring tech professionals."
            buttonText="Discover"
            href="#WhyUs"
          />
          <Card
            heading="Technologies We Cover"
            text="Java, JavaScript, Python, Node, and more await you."
            buttonText={isCoursesVisible ? "Hide Courses" : "Show Courses"}
            onClick={toggleCourses}
          />
        </div>
      </div>
    </section>
        {isCoursesVisible && <Courses />}
        </>
  );
}

export default AboutUs;