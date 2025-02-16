import React from "react";
import styles from "./Divider.module.scss";

interface DividerProps {
  length?: string; // Length of the divider (e.g., '50%', '200px')
  thickness?: string; // Thickness of the divider (e.g., '2px', '5px')
  color?: string; // Color of the divider
  position?: "start" | "center" | "end"; // Position of the divider
  className?: string; // Optional additional class names
}

const Divider: React.FC<DividerProps> = ({
  length = "100%", // Default length is full width
  thickness = "1px", // Default thickness
  color = "var(--primary-color)", // Default color
  position = "center", // Default position
  className = "",
}) => {
  return (
    <hr
      className={`${styles.divider} ${className}`}
      style={{
        width: length,
        height: thickness,
        backgroundColor: color,
        alignSelf:
          position === "start"
            ? "flex-start"
            : position === "end"
            ? "flex-end"
            : "center",
        margin:
          position === "center" ? "0 auto" : position === "start" ? "0 0 0 0" : "0 0 0 auto",
      }}
    />
  );
};

export default Divider;
