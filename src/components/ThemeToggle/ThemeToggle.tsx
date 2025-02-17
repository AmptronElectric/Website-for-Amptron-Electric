import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./ThemeToggle.module.scss";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleButton}
      aria-label="Toggle light and dark mode"
    >
      <div className={styles.iconWrapper}>
        <FaMoon
          size={32}
          className={`${styles.icon} ${styles.moon} ${isDarkMode ? styles.active : styles.inactive}`}
        />
        <FaSun
          size={32}
          className={`${styles.icon} ${styles.sun} ${isDarkMode ? styles.inactive : styles.active}`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
