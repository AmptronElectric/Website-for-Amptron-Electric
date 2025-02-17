import React from "react";
import { useTheme } from "../../context/ThemeContext";

import logoLight from "../../assets/logo-horizontal-light.webp";
import logoDark from "../../assets/logo-horizontal-dark.webp";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const { isDarkMode } = useTheme();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* Left Section: Logo and Text */}
        <div className={styles.logoSection}>
          <img
            src={isDarkMode ? logoDark : logoLight}
            alt="Commercial Electrician in Metro Vancouver"
            className={styles.logo}
          />
          <p>Your trusted electrical services provider</p>
        </div>

        {/* Right Section: Contact Info */}
        <div className={styles.contactSection}>
          <h3>CONTACT</h3>
          <p>
            <a href="tel:+11234567890" className={styles.contactLink}>
              Phone: +1 778-994-4027
            </a>
          </p>
          <p>
            <a
              href="mailto:amptronelectricbc@gmail.com"
              className={styles.contactLink}
            >
              Email: amptronelectricbc@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Section: All Rights Reserved */}
      <div className={styles.bottom}>
        <p>&copy; {currentYear} Amptron Electric. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
