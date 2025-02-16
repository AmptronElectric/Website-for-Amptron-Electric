import React from "react";
import styles from "./VStack.module.scss";

interface VStackProps {
  spacing?: number; // Space between rows in pixels
  margin?: string;
  align?: "start" | "center" | "end"; // Horizontal alignment of children
  justify?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly"; // Vertical alignment of children
  className?: string; // Optional additional class names
  children: React.ReactNode; // Nested child elements
  fullHeight?: boolean; // Optional property to make the VStack take full height
}

const VStack: React.FC<VStackProps> = ({
  spacing = 16,
  margin = "0 0 0 0",
  align = "start",
  justify = "start",
  className = "",
  children,
  fullHeight = false,
}) => {
  return (
    <div
      className={`${styles.vStack} ${className}`}
      style={{
        gap: `${spacing}px`,
        margin: margin,
        alignItems: align,
        justifyContent: justify,
        height: fullHeight ? "100%" : "auto",
      }}
    >
      {children}
    </div>
  );
};

export default VStack;
