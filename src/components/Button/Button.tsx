import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
  width?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  color = "primary",
  width = "150px",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[color]} ${className}`}
      style={{ width }}
    >
      {text}
    </button>
  );
};

export default Button;
