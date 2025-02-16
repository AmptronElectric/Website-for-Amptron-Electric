import React from "react";
import styles from "./Hstack.module.scss";

interface HStackProps {
  spacing?: number; // Space between columns in pixels
  align?: "start" | "center" | "end"; // Vertical alignment
  justify?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly"; // Horizontal alignment
  width?: string;
  variant?: "default" | "inline";
  className?: string; // Optional additional class names
  children: React.ReactNode; // Nested child elements
}

const HStack: React.FC<HStackProps> = ({
  spacing = 16,
  align = "start",
  justify = "start",
  width = "100%",
  variant = "default",
  className = "",
  children,
}) => {

  const variantClass = variant === "inline" ? styles.inlineHStack : styles.hStack;
  return (
    <div
      className={`${variantClass} ${className}`}
      style={{
        gap: `${spacing}px`,
        alignItems: align,
        justifyContent: justify,
        width,
      }}
    >
      {children}
    </div>
  );
};

export default HStack;
