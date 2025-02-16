import React from "react";
import styles from "./Title.module.scss";

interface TitleProps {
  text: string;
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  italic?: boolean;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, size = "h1", italic = false, className = "" }) => {
  return (
    <div className={`${styles.title} ${styles[size]} ${italic ? styles.italic : ""} ${className}`}>
      {text}
    </div>
  );
};

export default Title;
