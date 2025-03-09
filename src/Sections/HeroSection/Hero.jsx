import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    // <section className={styles.mainContainer}>
    //   <div className={styles.leftBar}>Left Section</div>
    //   <div className={styles.mainContent}>
    //     <div className="decorative-separator">
    //       <div className="separator-line" />
    //       <div className="separator-dot" />
    //     </div>
    //     <h1>Transforming Students into Job-Ready Professionals!</h1>
    //   </div>
    //   <div className={styles.mainImage}>Right Image</div>
    // </section>

    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.navLeft}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcfa574fdb13dfcc67c91e106151a2b648c8d839"
              alt="Company Logo"
              className={styles.logo}
            />
            <div className={styles.navLinks}>
              <div className={styles.navLink}>Home</div>
              <div className={styles.navLink}>About Us</div>
              <div className={styles.navLink}>Why Us?</div>
              <div className={styles.navLink}>Testimonials</div>
              <div className={styles.navLink}>Contact Us</div>
            </div>
          </div>
          <div className={styles.navActions}>
            <button className={styles.buttonWhite}>Join</button>
          </div>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.leftSection}>
            <div className={styles.scrollSection}>
              <div className={styles.socialIcons}>
                <i className="bx bxl-facebook-circle bx-lg"></i>
                <i className="bx bxl-instagram bx-lg"></i>
                <i className="bx bxl-whatsapp bx-lg"></i>
                <i className="bx bxl-linkedin-square bx-lg"></i>
              </div>
              <div className={styles.scrollIndicator}>
                <div className={styles.scrollDot} />
                <div className={styles.scrollLine} />
                <div className={styles.scrollText}>Scroll</div>
              </div>
            </div>
            <div className={styles.contentSection}>
              <div className={styles.dotLine}>
                <div className={styles.line} />
                <div className={styles.dot} />
              </div>
              <div className={styles.mainHeading}>
                Transforming Students into Job-Ready Professionals!
              </div>
              <div className={styles.description}>
                We offer comprehensive training in key areas that are essential
                for excelling in campus placements and technical interviews. Our
                well-structured modules cover:
              </div>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <div className={styles.featureDot} />
                  <div className={styles.featureText}>Aptitude & Reasoning</div>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureDot} />
                  <div className={styles.featureText}>Verbal Ability</div>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureDot} />
                  <div className={styles.featureText}>Employability Skills</div>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureDot} />
                  <div className={styles.featureText}>Technical Skills</div>
                </div>
              </div>
              <button className={`${styles.buttonBlue} + ${styles.ctaButton}`}>Know More</button>
            </div>
          </div>
          <div className={styles.rightSection}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/403013d638d7468461b925376926959844753eb7"
              alt="Abstract waves"
              className={styles.heroImage}
            />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.bottomContent}>
            Launch Your Career in Software Today!
          </div>
          <div className={styles.bottomRight}>
            <div className={styles.bottomDescription}>
              At Talent Scope, we empower aspiring software professionals with
              the skills they need to succeed. Join our community and unlock
              your potential in the tech industry.
            </div>
            <div className={styles.bottomButtons}>
              <button className={styles.buttonWhite}>Get Started</button>
              <button className={styles.buttonBlue}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
