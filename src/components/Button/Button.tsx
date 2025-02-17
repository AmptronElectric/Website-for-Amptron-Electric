import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
  width?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  color = "primary",
  width = "150px",
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[color]} ${className}`}
      style={{ width }}
      aria-label={text}
    >
      {text}
    </button>
  );
};

export default Button;
