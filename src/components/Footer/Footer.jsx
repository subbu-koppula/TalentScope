"use client";
import React, { useState } from "react";
import styles from "./Footer.module.css";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <footer className={styles.footer11}>
      <section className={styles.card}>
        <div className={styles.column}>
          {/* Logo Section */}
          <div className={styles.logo}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/79886fe1ac916bc5cb6f93f02f4105d0e5df9f38acb74c456e51f8e289ef309c?placeholderIfAbsent=true&apiKey=791459c1db58491e81d29d01c4f98d08"
              alt="Talent Scope Logo"
              className={styles.img}
            />
            <h1 className={styles.talentScope}>Talent Scope</h1>
          </div>

          {/* Contact Information Section */}
          <div className={styles.content}>
            <address className={styles.content2}>
              <h3 className={styles.address}>Address:</h3>
              <p
                className={
                  styles.behindMeghanTheatreLalithaNagarDilsukhnagarHyderbadTelangana500060
                }
              >
                9-76, Behind Meghan Theatre, Lalitha Nagar, <br />
                Dilsukhnagar, Hyderbad, Telangana 500060
              </p>
            </address>

            <div className={styles.content3}>
              <h3 className={styles.contact}>Contact:</h3>
              <div className={styles.container}>
                <a href="tel:9177840513" className={styles.css9177840513}>
                  9177840513
                </a>
                <a
                  href="mailto:talentscope.crt@gmail.com"
                  className={styles.talentscopecrtgmailcom}
                >
                  talentscope.crt@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <nav className={styles.socialLinks}>
            <a href="#" aria-label="Facebook">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/db0ca5f1865723d3e9a1889856d446d9470e9a4847a09a94a9c4f5e60e040c4b?placeholderIfAbsent=true&apiKey=791459c1db58491e81d29d01c4f98d08"
                alt="Facebook"
                className={styles.img2}
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/88e5f0f18daf76649ed03eba25f7f7505fba63458ecf8b40216cddc0be3e17b3?placeholderIfAbsent=true&apiKey=791459c1db58491e81d29d01c4f98d08"
                alt="Twitter"
                className={styles.img3}
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f2114a2b5ecceb174472043ded68970e4111372887c03d8e2271c0fdd7518bd?placeholderIfAbsent=true&apiKey=791459c1db58491e81d29d01c4f98d08"
                alt="Instagram"
                className={styles.img4}
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/114a36db7a5fb9760998e91e590be34dc125863370fb52542c0250ad800bf042?placeholderIfAbsent=true&apiKey=791459c1db58491e81d29d01c4f98d08"
                alt="LinkedIn"
                className={styles.img5}
              />
            </a>
          </nav>
        </div>

        <div className={styles.column2}>
          <div className={styles.content4}>
            <h2 className={styles.heading}>
              Join Our Learning Community Today
            </h2>
            <p className={styles.text}>
              Download our app and start your journey towards a successful
              software career now!
            </p>
          </div>

          {/* Signup Form Section */}
          <div className={styles.actions}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={styles.button}>
                Sign Up
              </button>
            </form>
            <p
              className={
                styles.byclickingSignUpyoureconfirmingthatyouagreewithourTermsandConditions
              }
            >
              By clicking Sign Up, you agree to our Terms and Conditions.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.credits}>
        <p className={styles.row}>© 2025 TalentScope. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
