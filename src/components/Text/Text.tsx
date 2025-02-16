import React from "react";
import styles from "./Text.module.scss";

interface TextProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "xlarge";
  weight?: "light" | "regular" | "bold";
  color?: "primary" | "secondary" | "muted" | "warning" | "success" | "error";
  align?: "left" | "center" | "right";
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  size = "medium",
  weight = "regular",
  color = "primary",
  align = "left",
  className = "",
}) => {
  return (
    <p
      className={`${styles.text} ${styles[size]} ${styles[weight]} ${styles[color]} ${styles[align]} ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
